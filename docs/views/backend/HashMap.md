---
title: HashMap底层实现和原理
date: 2019-06-13
tags:
  - "源码分析"
  - Java
categories:
  - "后端"
isShowComments: false
---

<Boxx/>

[[toc]]

## 简介

- HashMap 是一个散列桶（数组和链表），它存储的内容是键值对(key-value)映射
- HashMap 采用了数组和链表的数据结构，方便继承了数组的线性查找和链表的寻址修改
- HashMap 是非 synchronized（但是在 rehash 和扩容的时候可能出现并发问题），所以 HashMap 很快
- HashMap 可以接受 null 键和值，而 Hashtable 则不能（原因就是 equlas()方法需要对象）

## 继承关系

```java
public class HashMap<K,V> extends AbstractMap<K,V>
    implements Map<K,V>, Cloneable, Serializable {
```

## 实现原理

- HashMap 由数组+链表(+红黑树 1.8)来实现对数据的存储
- 详细可以看：[HashMap 原理深入理解](https://blog.csdn.net/visant/article/details/80045154)

![](/tangsanshao7/img/backend/HashMap/20180423002750407.png)

## 手写一个简单的 HashMap

- 很简单，就是看一下 HashMap 源码中定义了什么属性、方法，然后我们写一个简单的类继承 HashMap，挑其中几个重要的方法做出实现就好了

```java
package com.eee;

import java.util.HashMap;

/**
 * @className: MyHashMap
 * @descripe: 模拟HashMap底层实现
 * @author: zpj
 * @date: 2019/6/7
 * @version: 1.0
 */
public class MyHashMap<key,value> extends HashMap<key,value>{

    //定义一个数组
    private Node<key,value>[] table;
    //初始化数组容量大小为 16
    private static Integer CSHSZRL = 16;
    //定义一个size，用来统计HashMap内个数
    private int size = 0;

    public MyHashMap() {
        //创建对象的时候就初始化数组
        table = new Node[CSHSZRL];
    }

    @Override
    public int size() {
        return size;
    }

    @Override
    public value get(Object key) {
        //算出这个节点是在哪个hash组
        int hash = key.hashCode();
        int index = hash % table.length;

        //遍历
        for(Node<key,value> node = table[index];table[index]!=null;node.getNext()){
            //新元素和老元素一样的话
            if(node.getK().equals(key)){
                return node.getV();
            }
        }
        return null;
    }

    @Override
    public boolean containsKey(Object key) {
        return super.containsKey(key);
    }

    /**
     * HashMap的 put()方法
     * @param key
     * @param value
     * @return 当put元素出现重复的时候，新元素覆盖老元素，返回老元素的value
     */
    @Override
    public value put(key key, value value) {
        //算出这个节点是在哪个hash组
        int hash = key.hashCode();
        int index = hash % table.length;

        //新增元素时，遍历老元素，和新元素比较
        for(Node<key,value> node = table[index];table[index]!=null;node.getNext()){
            //新元素和老元素一样的话
            if(node.k.equals(key)){
                value oldValue = node.v;
                node.v=value;
                return oldValue;
            }
        }

        //当put第N个元素
        addNode(key, value, index);

        return null;
    }

    private void addNode(key key, value value, int index) {
        //Node<key, value> node = new Node<>(key, value, null);//这个hash组是空的，put第一个元素
        //table[index] = node;

        //老节点对象
        Node node = table[index];
        //再把新的节点对象追加到原先节点头部,形成链表
        table[index] = new Node(key,value,node);
        //每增加一个元素，HashMap内 个数加1
        size++;
    }

    @Override
    public value remove(Object key) {
        return super.remove(key);
    }

    /**
     * 源码中定义了一个节点类对象，用来存放每个数据
     * @param <K>
     * @param <V>
     */
    static class Node<K,V> {

        private K k;
        private V v;
        //用来充当链表
        private Node<K,V> next;

        //可以传入新元素，然后构成链表
        public Node(K k, V v, Node<K, V> next) {
            this.k = k;
            this.v = v;
            this.next = next;
        }

        public K getK() {
            return k;
        }

        public V getV() {
            return v;
        }

        public Node<K, V> getNext() {
            return next;
        }
    }

    public static void main(String[] args){
        MyHashMap<String,String> myHashMap = new MyHashMap<>();
        for (int x=0;x<10;x++){
            myHashMap.put(x+"貂蝉",x+"貂蝉配吕布");
        }
        myHashMap.put("8貂蝉","8貂蝉戏吕布");
        System.out.println(myHashMap.get("8貂蝉"));
        System.out.println(myHashMap.size());
    }

}
```

## HashMap 的扩容机制 resize()

- 这一节是整个文章的重点，也是我学习的重点笔记，从这我也理解了为什么阿里规范手册中初始化 HashMap 的时候要指定大小。

### HashMap 的负载因子

1. 负载因子 loadFactor 保持在 0.75f 是在时间跟空间上达到一个平衡，实际上也就是说 0.75f 是效率相对比较高的

### 先说 HashMap 底层数组长度扩容为什么是 2 的幂次方数(其实就是为了使 hash 均匀分组)

1. 它其实涉及到了底层二进制算法，但目的很简单：就是为了使 hash 均匀分组
2. 当数组长度为 2 的 n 次幂的时候，不同的 key 算得得 index 相同的几率较小，那么数据在数组上分布就比较均匀，也就是说碰撞的几率小，相对的，查询的时候就不用遍历某个位置上的链表，这样查询效率也就较高了

### 再来说 HashMap 的 resize()

1. 当 hashmap 中的元素越来越多的时候，碰撞的几率也就越来越高（因为数组的长度是固定的），所以为了提高查询的效率，就要对 hashmap 的数组进行扩容，数组扩容这个操作也会出现在 ArrayList 中，所以这是一个通用的操作，很多人对它的性能表示过怀疑，不过想想我们的“均摊”原理，就释然了，而在 hashmap 数组扩容之后，最消耗性能的点就出现了：原数组中的数据必须重新计算其在新数组中的位置，并放进去，这就是 resize()。

2. 那么 hashmap 什么时候进行扩容呢？当 hashmap 中的元素个数超过数组大小*loadFactor 时，就会进行数组扩容，loadFactor 的默认值为 0.75，也就是说，默认情况下，数组大小为 16，那么当 hashmap 中元素个数超过 16\*0.75=12 的时候，就把数组的大小扩展为 2\*16=32，即扩大一倍，然后重新计算每个元素在数组中的位置，而这是一个非常消耗性能的操作，所以如果我们已经预知 hashmap 中元素的个数，那么预设元素的个数能够有效的提高 hashmap 的性能。比如说，我们有 1000 个元素 new HashMap(1000), 但是理论上来讲 new HashMap(1024)更合适，不过扩容是 2 的幂次方数，即使是 1000，hashmap 也自动会将其设置为 1024。 但是 new HashMap(1024)还不是更合适的，因为 0.75\*1000 < 1000, 也就是说为了让 0.75 * size > 1000, 我们必须这样 new HashMap(2048)才最合适，既考虑了&的问题，也避免了 resize 的问题。

   > 具体 resize()的实现可以看：<https://blog.csdn.net/u010890358/article/details/80496144>

## HashMap 面试题

1. hashmap 的主要参数都有哪些？

2. hashmap 的数据结构是什么样子的？自己如何实现一个 hashmap？

3. hash 计算规则是什么？

4. 说说 hashmap 的存取过程？

5. 说说 hashmap 如何处理碰撞的，或者说说它的扩容？

   == [答案](https://www.cnblogs.com/qfxydtk/p/8734784.html) ==

6. 针对 HashMap 中某个 Entry 链太长，查找的时间复杂度可能达到 O(n)，怎么优化？

7. 如果 HashMap 的大小超过了负载因子(load factor)定义的容量，怎么办？

8. 为什么 String, Interger 这样的类适合作为键？

9. HashMap 与 HashTable 区别，能否让 HashMap 同步？

   == [答案](https://blog.csdn.net/u012512634/article/details/72735183) ==

10. HashMap 的 table 的容量如何确定？loadFactor 是什么？ 该容量如何变化？这种变化会带来什么问题？

11. HashMap 的遍历方式及其性能对比

12. HashMap，LinkedHashMap，TreeMap 有什么区别？

13. HashMap & TreeMap & LinkedHashMap 使用场景？

14. 为什么 ConcurrentHashMap 比 HashTable 效率要高，及 ConcurrentHashMap？

    == [答案](https://www.jianshu.com/p/75adf47958a7) ==

15. [hashMap put()](https://blog.csdn.net/the_one_and_only/article/details/81665098)
