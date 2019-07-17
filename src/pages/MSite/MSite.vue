<template>
<section class="msite">
    <!--首页头部title-->
    <!--由msite_header改成header-->
    <HeaderTop title="昌平区鲁东大学北区(青年南路)">
       <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航轮播-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/drink.png" alt="" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/meishi.png" class="img">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/jiancan.png" class="img">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/tehui.png" alt="" class="img">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/zhunshi.png" class="img">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/zaocan.png" class="img">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/tuijian.png" class="img">
              </div>
              <span>土豪推荐</span>
            </a>
           <!--下面的图片省略-->
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/market.png" class="img">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
        </div>
        <div class="swiper-slide">
            slide3
        </div>
        <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>

    </div>
  </section>
</template>

<script>
  import Swiper from'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    mounted(){
      // 创建一个swiper实例对象来实现轮播
      new Swiper('.swiper-container',{
       autoplay:true,
        pagination: {
              el: '.swiper-pagination',
            },
      })
    },
    components:{
      HeaderTop,
      ShopList
    },
    methods:{
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
        position relative
        margin-top 50px
    .img
      width 45px
      height 45px
      margin 5px
    .swiper-slide
      display flex
      flex-wrap wrap
      justify-content space-around
      font-size 13px
      span
        text-align center
    .swiper-container
        width: 100%;
        height: 200px;
    .link_to_food
        width 25%
        text-align center
      span
        color #000
    .food_container
      margin 5px

</style>
