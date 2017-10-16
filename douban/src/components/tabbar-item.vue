<template>
	<a class="m-tabbar-item" :class="{'is-active':isActive}" @click="goToRouter">
		<span class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span> <!--控制display-->
	    <span class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
		<span class="m-tabbar-item-text"><slot></slot></span>
	</a>
</template>
<script>
	export default{
		props: {
            id: {
            	type: String
            },
            isRouter: {
            	type: Boolean,
            	default: false
            }
		},
		computed: {
			isActive(){
				if(this.$parent.value === this.id){ //this指当前Vue实例,index.vue里有五个tabbar-item实例
					return true;
				}
			}
		},
		methods: {
			goToRouter(){
                this.$parent.$emit('input', this.id);//子组件向父组件tabbar传值，this.id相当于输入框的输入值
                if(this.isRouter){ //有什么意义？
                	this.$router.push(this.id)  //$router.push(url)跳转到url，这里传的是path字符串
                }  
			}
		}
	}
</script>
<style lang="less">
@import "../assets/less/var.less";
.m-tabbar-item{
	flex: 1;
	text-align: center;
	.m-tabbar-item-icon{
		display: block;
		padding-top: 2px;
		img{
			width: 28px;
			height: 28px;
		}
	.m-tabbar-item-text{
		display: block;
		font-size: 10px;
		color: red;
	}
	&.is-active{            /*&表示父级元素*/
		.m-tabbar-item-text{
			color: @tabbarActiveColor;
		}
	}
	}
}
</style>