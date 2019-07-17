<template>

<section class="search">
 <HeaderTop title="搜索"> </HeaderTop>
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称"
    class="search_input">
      <input type="submit" class="search_submit">
    </form>


    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    

</div>

</section>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import Swiper from'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
 new Swiper ('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    
    
  })        
    },
    name: 'Search.vue',
    components:{
      HeaderTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 50px
      height 50px
      padding 12px 8px
    input 
      height 35px
      padding 0 4px 
      border-radius 2px
      outline none
    .search_input
      width 79%
      float left
      font-size 14px
      border 4px solid #f2f2f2
      background #f2f2f2
      font-weight bold
    .search_submit
      float right
      width 18%
      background #02a774
      color #fff
    .swiper-container 
        width: 200px;
        height: 100px;






</style>
