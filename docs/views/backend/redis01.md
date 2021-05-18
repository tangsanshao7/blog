---
title: "Redis基础"
date: 2019-08-04 18:41:12
tags:
  - Redis
categories:
  - "后端"
isShowComments: false
---

<Boxx/>

对 Redis 的总结：常用命令、使用场景、在 Spring 中使用、在 SpringBoot 中是使用

<!-- more -->

[[toc]]

## 简介

**Redis(非关系型数据库)：** 先开启服务器端 service,再打开客户端 cil

**Redis**和**MongoDB**是当前使用最广泛的 NoSQL，而就 Redis 技术而言，它的性能十分优越，可以**支持每秒十几万此的读/写操作**，其性能远超数据库，并且还**支持集群、分布式、主从同步等**配置，原则上可以无限扩展，让更多的数据存储在内存中，更让人欣慰的是它还**支持一定的事务能力**，这保证了高并发的场景下数据的安全和一致性

> redis 特点

1. 单线程,底层 c 语言开发,默认 16 个数据库(下表从 0 开始)
2. 支持事务(原子性)
3. redis 持久化 -> 存储在磁盘中,占用内存
4. 99%都是部署在 Linux 系统上

> redis 优缺点

1. 优点: (1) 读写性能优异

   ​ (2)支持数据持久化，支持 AOF 和 RDB 两种持久化方式

   ​ (3)支持主从复制，主机会自动将数据同步到从机，可以进行读写分离

   ​ (4)数据结构丰富：除了支持 string 类型的 value 外还支持 string、hash、set、sortedset、list 等数据结构

2. 缺点: (1) 缺少结构化(没有表和字段的概念)，可读性查，不能使用 where 条件

   ​ (2) 由于是内存数据库，费内存

   ​ (3)不具备自动容错和恢复功能，主机从机的宕机都会导致前端部分读写请求失败，需要等待机器重启或者手动切换前端的 IP 才能恢复 --- [更多](https://www.cnblogs.com/rzqz/p/7440249.html)

## redis 提供的 5 中数据类型

1. string 最大存储长度为 512M
2. list (linkedlist)双向列表,分页
3. hash hashmap
4. set hashset 无序
5. zset treeset 有序

## redis 使用场景

1. 缓存 替数据库 MySQL Oracle 分担一部分压力
2. 分页 点赞 踩 统计用户访问量 在线人数
3. 分布式锁
4. 单点登录 spring session cookie session

## redis 常用命令:

- flushdb 清空当前的数据库(慎用)
- flushall 清空所有的数据库(根本就不要用)
- select 15 切换到第 16 个数据库

### string:

| 命令                | 释义                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------- |
| set key value       | 设置 key 和 value                                                                           |
| get key             | 通过 key 拿值                                                                               |
| del key1,key2,..    | 删除一个或多个数据                                                                          |
| expire key 10       | 设置消亡时间，10 秒后这个 key 就删除                                                        |
| keys _k_            | 查询所有的包含 k 的 key                                                                     |
| ttl key             | 当设置消亡时间后,以秒为单位返回 key 的剩余时间 (-1 代表没有设置,-2 代表已被删除)            |
| move key1 15        | 把 key1 移动到第 16 个数据库(从 0 开始)                                                     |
| rename key1 key2    | 把 key1 重新命名为 key2 （如果 key2 已存在那会覆盖 ）                                       |
| RENAMENX            | 当且仅当 newkey 不存在时，将 key 改名为 newkey                                              |
| append key1 valueX  | 如果 key1 存在就把 valueX 追加到原先 value 的末尾,key1 不存在就是 set                       |
| mset k1 v1 k2 v2 .. | 批量新增                                                                                    |
| mget k1 k2 k3 ...   | 批量拿值                                                                                    |
| incr key            | 将 key 中储存的数字值自动增一                                                               |
| incrby key 数字     | 将 key 所储存的值加上增量                                                                   |
| decrby key 数字     | 将 key 所储存的值减上数字                                                                   |
| setnx key value     | 将 key 的值设为 value ，当且仅当 key 不存在。若给定的 key 已经存在，则 SETNX 不做任何动作。 |
| strlen key          | 返回 key 所对应的 value 的长度                                                              |

### hash:(效率最高)

| 命令                                     | 释义                               |
| ---------------------------------------- | ---------------------------------- |
| hset key(相当于表) field(字段) value(值) | 建表和赋值 key 必须唯一,不然会覆盖 |
| hget key field                           | 取值                               |
| hkeys key                                | 获取 key 中所有的字段              |
| hvals key                                | 获取 key 中所有的值                |

### list:

| 命令                                      | 释义                                          |
| ----------------------------------------- | --------------------------------------------- |
| lpush key v1 v2 v3                        | 在 key 中依次插入 3 个值,每次插入都放在最左边 |
| lrange key start(起始下标) stop(结束下标) | 取出 key 中从下标 start 到 stop(包含)的值     |
| lrange list (当前页-1)*rows page*rows-1   | 分页                                          |

### set:(一般用交集并集)

| 命令                       | 释义                 |
| -------------------------- | -------------------- |
| sadd key 元素 1 元素 2 ... | 添加多个元素到集合中 |
| smembers key               | 取出集合中的所有成员 |

### zset:

| 命令                             | 释义                       |
| -------------------------------- | -------------------------- |
| zadd key score(值) member(字段)  | score 必须得是 int/float   |
| zrange key start stop            | 获取所有的 member          |
| zrange key start stop withscores | 获取所有的 member 和 score |

## 事务：(不推荐使用)

​ multi 开启事务
​ ...添加队列操作
​ exec 执行事务

​ redis 支持 lua 脚本：
​ //key[]/argv[]可以有多个,2 表示有两个 key,后边是依次给 key 和 argv 赋值
​ eval "return {keys[1],key[2],argv[1],argv[2]}" 2 key1 key2 1 2

> 注意：redis 缓存操作和数据库操作若要成为一个事务,即当数据库操作添加失败时也不能进到缓存中
> 所以我们只能造一个异常出来,因为事务的异常只能抛
> 事务的底层有一个 try cath ,会把我们自己 try 的捕获,当出问题时我们 try 会使事务失效

## 简单 spring 配置 jedis(相当于 jdbc):

0. 导入 jar 包
1. 在 xml 中配置数据源 JedisPoolConfig
   ​ maxTotal 最大连接数
   ​ minIdle 最小空闲数
   ​ minIdle 最大空闲数
   ​ maxWaitMillis 超时时间
1. 客户端连接服务端操作(没有 set 方法,只能通过构造方法注入属性) JedisPool
   ​ poolConfig 注入 1 连接池
   ​ host IP 地址
   ​ port 端口号

## 详细 在 spring 中使用 redis

1. **配置 xml applicationContext-redis.xml**

```xml
	<!-- redis单机版 -->
	<bean id="jedisPool" class="redis.clients.jedis.JedisPool">
		<constructor-arg name="host" value="192.168.25.153"/>
		<constructor-arg name="port" value="6379"/>
	</bean>
	<!-- 我们封装的jedis常用方法类 -->
	<bean id="jedisClientPool" class="com.taotao.jedis.JedisClientPool"/>

	<!-- redis集群 -->
	<!-- <bean id="jedisCluster" class="redis.clients.jedis.JedisCluster">
		<constructor-arg>
			<set>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host" value="192.168.25.153"/>
					<constructor-arg name="port" value="7001"/>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host" value="192.168.25.153"/>
					<constructor-arg name="port" value="7002"/>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host" value="192.168.25.153"/>
					<constructor-arg name="port" value="7003"/>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host" value="192.168.25.153"/>
					<constructor-arg name="port" value="7004"/>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host" value="192.168.25.153"/>
					<constructor-arg name="port" value="7005"/>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host" value="192.168.25.153"/>
					<constructor-arg name="port" value="7006"/>
				</bean>
			</set>
		</constructor-arg>
	</bean>
	<bean id="jedisClientCluster" class="com.taotao.jedis.JedisClientCluster"/> -->
```

2. **可配置的 redis 连接池**

```java
// 池基本配置
JedisPoolConfig config = new JedisPoolConfig();

//是否启用后进先出, 默认true
config.setLifo(true);
//最大空闲连接数, 默认8个
config.setMaxIdle(8);
//最大连接数, 默认8个
config.setMaxTotal(8);
//获取连接时的最大等待毫秒数(如果设置为阻塞时BlockWhenExhausted),如果超时就抛异常, 小于零:阻塞不确定的时间,  默认-1
config.setMaxWaitMillis(-1);
//逐出连接的最小空闲时间 默认1800000毫秒(30分钟)
config.setMinEvictableIdleTimeMillis(1800000);
//最小空闲连接数, 默认0
config.setMinIdle(0);
//每次逐出检查时 逐出的最大数目 如果为负数就是 : 1/abs(n), 默认3
config.setNumTestsPerEvictionRun(3);
//对象空闲多久后逐出, 当空闲时间>该值 且 空闲连接>最大空闲数 时直接逐出,不再根据MinEvictableIdleTimeMillis判断  (默认逐出策略)
config.setSoftMinEvictableIdleTimeMillis(1800000);
//在获取连接的时候检查有效性, 默认false
config.setTestOnBorrow(false);
//在空闲时检查有效性, 默认false
config.setTestWhileIdle(false);

// 使用配置创建连接池
jedisPool = new JedisPool(config, host, port);
Jedis jedis = pool.getResource();// 从连接池中获取单个连接
//jedis.auth("password");// 如果需要密码

//...各种jedis操作

//jedis.close();//用完记得关闭连接
```

3. **对 redis 单机版、连接池版、集群版的简单测试**

```java
package com.taotao.jedis;

import java.util.HashSet;
import java.util.Set;

import org.junit.Test;

import redis.clients.jedis.HostAndPort;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisCluster;
import redis.clients.jedis.JedisPool;

public class TestJedis {

	@Test
	public void testJedis() throws Exception {
		//创建一个jedis对象，需要指定服务的ip和端口号
		Jedis jedis = new Jedis("192.168.25.153", 6379);
		//直接操作数据库
		jedis.set("jedis-key", "1234");
		String result = jedis.get("jedis-key");
		System.out.println(result);
		//关闭jedis
		jedis.close();
	}

	@Test
	public void testJedisPool() throws Exception {
		//创建一个数据库连接池对象（单例），需要指定服务的ip和端口号
		JedisPool jedisPool = new JedisPool("192.168.25.153", 6379);
		//从连接池中获得连接
		Jedis jedis = jedisPool.getResource();
		//使用Jedis操作数据库（方法级别使用）
		String result = jedis.get("jedis-key");
		System.out.println(result);
		//一定要关闭Jedis连接
		jedis.close();
		//系统关闭前关闭连接池
		jedisPool.close();
	}

	@Test
	public void testJedisCluster() throws Exception {
		//创建一个JedisCluster对象，构造参数Set类型，集合中每个元素是HostAndPort类型
		Set<HostAndPort> nodes = new HashSet<>();
		//向集合中添加节点
		nodes.add(new HostAndPort("192.168.25.153", 7001));
		nodes.add(new HostAndPort("192.168.25.153", 7002));
		nodes.add(new HostAndPort("192.168.25.153", 7003));
		nodes.add(new HostAndPort("192.168.25.153", 7004));
		nodes.add(new HostAndPort("192.168.25.153", 7005));
		nodes.add(new HostAndPort("192.168.25.153", 7006));
		JedisCluster jedisCluster = new JedisCluster(nodes);
		//直接使用JedisCluster操作redis，自带连接池。jedisCluster对象可以是单例 的。
		jedisCluster.set("cluster-test", "hello jedis cluster");
		String string = jedisCluster.get("cluster-test");
		System.out.println(string);
		//系统关闭前关闭JedisCluster
		jedisCluster.close();
	}
}
```

## 详细 在 springboot 中使用 redis

1. **在 SpringBoot 中添加 Redis 依赖：**

```xml
<!--redis依赖配置-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

2. **在 SpringBoot 中配置`application-dev.yml`**

```yml
redis:
  host: localhost # Redis服务器地址
  database: 0 # Redis数据库索引（默认为0）
  port: 6379 # Redis服务器连接端口
  password: # Redis服务器连接密码（默认为空）
  jedis:
    pool:
      max-active: 8 # 连接池最大连接数（使用负值表示没有限制）
      max-wait: -1ms # 连接池最大阻塞等待时间（使用负值表示没有限制）
      max-idle: 8 # 连接池中的最大空闲连接
      min-idle: 0 # 连接池中的最小空闲连接
  timeout: 3000ms # 连接超时时间（毫秒）
```

3. **常用的 redis 操作**

> 通过 springboot 自动配置的**StringRedisTemplate**对象进行 Redis 的读写操作

```java
package com.macro.mall.portal.service.impl;

import com.macro.mall.portal.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

/**
 * redis操作Service的实现类
 */
@Service
public class RedisServiceImpl implements RedisService {
    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Override
    public void set(String key, String value) {
        stringRedisTemplate.opsForValue().set(key, value);
    }

    @Override
    public String get(String key) {
        return stringRedisTemplate.opsForValue().get(key);
    }

    @Override
    public boolean expire(String key, long expire) {
        return stringRedisTemplate.expire(key, expire, TimeUnit.SECONDS);
    }

    @Override
    public void remove(String key) {
        stringRedisTemplate.delete(key);
    }

    @Override
    public Long increment(String key, long delta) {
        return stringRedisTemplate.opsForValue().increment(key,delta);
    }
}
```

4. redis 的其他操作

> 注意：使用 redis 存储对象的时候，一定要将对象序列化（实现 Serializable 接口或自己写序列化工具类）
>
> 其他操作（集合、hash 等）详见：https://www.jianshu.com/p/56999f2b8e3b

## redis 缓存与数据库同步

- 新增：数据库新增后，放到缓存中

- 删除：删除缓存后，再删除数据库相应数据

- 查询：

![](/tangsanshao7/img/backend/redis/缓存查询.png)

- 更新：

![](/tangsanshao7/img/backend/redis/缓存更新.png)
