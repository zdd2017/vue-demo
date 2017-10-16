<template>
	<header class="m-header" :class="{'is-bg':bg, 'is-fixed':fixed}">
		<div class="m-header-button is-left">
			<slot name="left"></slot>
		</div>
		<h1 class="m-header-title" v-text="title"></h1>
		<div class="m-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script>
	export default{
		props: {        //props验证
			title: {
				type: String,
				default: ''
			},
			bg: {
				type: Boolean,
				default: false
			},
			fixed: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="less">
@import "../assets/less/var.less";//注意分号
	.m-header{
		display: flex;
		align-items: center;
		height: 44px;
		padding: 0 10px;
		background: #fff;
		color: @headerDefaultColor;
		boder-bottom: 1px solid #eee;
		a{
			color: @headerDefaultColor;
			text-decoration: none;
		}
		.m-header-button{
			width: 70px;
			align-items: stretch;
			&.is-left{
				text-align: left;
			}
			&.is-right{
				text-align: right;
			}
			.m-icon-img{
				width: 20px;
				height: 20px;  //不对齐
			}
			.margin-right-10{
				margin-right: 10px; 
			}	
		}
		.m-header-title{
			flex: 1;
			text-align: center;
			font-size: 16px;
			text-overflow: ellipsis; //文本溢出元素时用省略号代替修剪文本
			white-space: nowrap; //文本不换行
			overflow: hidden;
		}
		&.is-bg{
			background: @headerBg;
			color: #fff;
			a{
				color: #fff;
			}
			.m-header-title{
				color: #fff;
			}
		}
		&.is-fixed{
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			z-index: 9;
		}
	}
</style>