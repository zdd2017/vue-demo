<template>
	<div class="m-tabbar">
		<slot></slot>
	</div>
</template>
<script>
	import mTabbarItem from './tabbar-item'//???删掉也行
	export default {
		props: ['value'], //注册value属性接受父组件index.vue传过来select值：value="select"
	    computed: {
	    	value(){
	    		return this.$route.matched[0].name  //???
	    	}
	    }
	}
</script>
<style lang="less">
	.m-tabbar{
		display: flex;
		flex-direction: row;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden; /* ?? */
		height: 50px;
		background: #fff;
		border-top: 1px solid #e4e4e4;
	}
</style>