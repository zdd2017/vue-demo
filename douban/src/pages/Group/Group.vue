<template>
	<div>
		<m-header title="小组" fixed>
			<a href="#" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_green.png"></a>
			<a href="#" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"></a>
		</m-header>
	</div>
</template>

<script>
    import mHeader from '../../components/header'
	export default{
        name: "group",
        components: {
        	mHeader
        }
	}
</script>