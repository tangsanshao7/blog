<!--
 * @Author: your name
 * @Date: 2021-05-17 20:47:26
 * @LastEditTime: 2021-05-17 21:42:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog2\docs\.vuepress\components\Copyright.vue
-->
<template>
  <div>
    <div v-html="html" />
    <p>
      <br />
      —————————— <br />
      Cas<br />
      链接：<a :href="location">{{ location }}</a> <br />
      来源：znote <br />
      版权声明：著作权归原作者所有，商业转载请联系作者获得授权，非商业转载请注明出处。
    </p>
  </div>
</template>

<script>
export default {
  props: ["html"],

  created() {
    this.location = window.location;
  },
};
</script>

<style scoped></style>
