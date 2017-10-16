<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
        <slot name="swiper-con"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script>
    import '../assets/lib/swiper/js/swiper.js'
    export default {
        props: {
            swipeid: {
                type: String,
                default: 'swipe01'
            },
            effect: {
                type: String,
                default: 'slide'
            },
            loop: {
                type: Boolean,
                default: true
            },
            direction: {
                type: String,
                default: 'horizontal'
            },
            pagination: {
                type: Boolean,
                default: true
            },
            autoplay: {
                type: Number,
                default: 5000
            },
            paginationType: {
                type: String,
                default: 'bullets'
            }
        },
        mounted() {  //如果不能写在HTML内容的后面，则需要在页面加载完成后再初始化.mounted:在服务器端渲染期间不被调用,在实例挂载之后调用
            var that = this;
            new Swiper ('.'+that.swipeid, {
            loop: that.loop,
    
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationType: that.paginationType,
            autoplay: that.autoplay,
            direction: that.direction,
            effect: that.effect,
            })        
        }
    }
</script>

<style>
    @import '../assets/lib/swiper/css/swiper.css';
</style>