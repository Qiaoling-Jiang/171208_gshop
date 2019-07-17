<template>
  <!-- 修改应用组件的模板 -->
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  // 引入底部组件并注册
  export default {
    name:'App',
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // 整个应用组件的样式
  #app
    width 100%
    height 100%
    background: #fff
</style>
