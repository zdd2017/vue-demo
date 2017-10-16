<template>
  <div id="app">
    <router-view></router-view> <!--点击链接后渲染的内容-->
    <m-tabbar v-model="select"> <!--相当于<m-tabbar :value="select" @input="select=arguments[0]">-->
      <m-tabbar-item id="Index" isRouter> <!--相当于 :isRouter="true"-->
      <img src="./assets/images/ic_tab_home_normal.png" slot="icon-normal">
      <img src="./assets/images/ic_tab_home_active.png" slot="icon-active">
      首页  <!--为什么能插入slot中？-->
      </m-tabbar-item>
      <m-tabbar-item id="AudioBook" isRouter>
      <img src="./assets/images/ic_tab_subject_normal.png"  slot="icon-normal">
      <img src="./assets/images/ic_tab_subject_active.png"  slot="icon-active">   
      书影音
      </m-tabbar-item>
      <m-tabbar-item id="Broadcast" isRouter>
      <img src="./assets/images/ic_tab_status_normal.png"  slot="icon-normal">
      <img src="./assets/images/ic_tab_status_active.png"  slot="icon-active">
      广播
      </m-tabbar-item>
      <m-tabbar-item id="Group" isRouter>
      <img src="./assets/images/ic_tab_group_normal.png"  slot="icon-normal">
      <img src="./assets/images/ic_tab_group_active.png"  slot="icon-active">
      小组
      </m-tabbar-item>
      <m-tabbar-item id="Mine" isRouter>
      <img src="./assets/images/ic_tab_profile_normal.png"  slot="icon-normal">
      <img src="./assets/images/ic_tab_profile_active.png"  slot="icon-active">
      我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
  import mTabbar from './components/tabbar'
  import mTabbarItem from './components/tabbar-item'
  export default {
    name: 'app',
    components: {
      mTabbar,
      mTabbarItem,
    },
    data(){      /*在组件中，因为可能在多处调用同一组件，所以为了不让多处组件共享同一data对象，只能返回函数*/
      return {
        select: "Index"
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
