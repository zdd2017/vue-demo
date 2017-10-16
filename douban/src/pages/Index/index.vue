<template>
	<div>
		<m-header title="豆瓣app" :bg="true" fixed> <!--fixed???-->
			<a href="#" slot="right"></a>
		</m-header>
		<m-cell title="提醒">
			<img src="../../assets/images/ic_mine_notification.png" slot="icon">
			<a href="#" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
		</m-cell>
		<m-cell title="设置">
			<a href="#" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
		</m-cell>
        <m-cell title="热门" label="hot">
        	
        </m-cell>
        <m-media-cell v-for="item in hotData" :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" :key="item.id">  <!--图片不显示-->
        	<span slot="title">{{item.title}}</span>
        	<span slot="describe">{{item.target.desc}}</span>
        </m-media-cell>
		<div class="page-content">
			<m-swipe swipeid="swipe01" :autoplay="1000" effect="cube"> <!--:是v-bind的语法糖，绑定vue的一个数据，不加冒号就是HTML的属性。这里是不是加不加冒号无所谓？？-->
				<div class="swiper-slide slide02" slot="swiper-con">Slide 1</div>
				<div class="swiper-slide slide01" slot="swiper-con">Slide 2</div>
				<div class="swiper-slide slide03" slot="swiper-con">Slide 3</div>
			</m-swipe>
			<m-swipe swipeid="swipe02" :loop="false" paginationType="fraction" :autoplay="2000" effect="cube"><!--loop=false没用？？-->
				<div class="swiper-slide slide02" slot="swiper-con">Slide 1</div>
				<div class="swiper-slide slide01" slot="swiper-con">Slide 2</div>
				<div class="swiper-slide slide03" slot="swiper-con">Slide 3</div>
			</m-swipe>			
		</div>
	</div>
</template>
<!--tabbar闪现-->
<script type="text/javascript" src="../../assets/js/vue-resource.js"></script>
<script>
	import mHeader from '../../components/header'
	import mSwipe from '../../components/swipe'
	import mCell from '../../components/cell'
	import mMediaCell from '../../components/media-cell'
	export default {
		name: 'index',
		components: {
			mHeader,
			mSwipe,
			mCell,
			mMediaCell
		 },
		data () {
			return {
				recommendData: [],
				hotData: []
			}
		},
		created () {
            this.fetchData()
        },
		methods: {
			fetchData(){
				this.axios.get('../../../static/data/homeData.json').then((response) => {
                let data = response.data.recommend_feeds;
                let recommend = [];
                let hot = [];
                for(var i in data){
                	if(data[i].card && data[i].card.name == '为你推荐'){
                		recommend.push(data[i]);
                	} else {
                		hot.push(data[i]);
                	}
                }
                this.recommendData = recommend;
                this.hotData = hot;
            })
		}
	   }
	}
// this.$http.get('../../data/homeData.json').then(
//             function (res) {
//                 // 处理成功的结果
//                 alert(res.data);
//             },function (res) {
//             // 处理失败的结果
//             }
//         );	直接放在script里面无效
</script>

<style lang="less">
	.is-fixed ~ .page-content {
		padding-top:44px;
	} //~避免编译，用于调试
	.slide01{
		background: #41b883;
		text-align: center;
		line-height: 200px;
		font-size: 30px;
		color: #fff;
	} 
	.slide02{
		background: #364a60;
		text-align: center;
		line-height: 200px;
		font-size: 30px;
		color: #fff;
	}
	.slide03{
		background: #ea6f5a;
		text-align: center;
		line-height: 200px;
		font-size: 30px;
		color: #fff;
	}
</style>