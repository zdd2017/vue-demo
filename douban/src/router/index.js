import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/index'
import Broadcast from '../pages/Broadcast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',      
      name: 'Index',
      component: Index
    },
    {
    	path: '/broadcast',  //要访问的页面路径（好像不分大小写）
    	name: 'Broadcast',
    	component: Broadcast //映射的组件
    },
    {
    	path: '/audioBook',
    	name: 'AudioBook',
    	component: AudioBook
    },
    {
    	path: '/group',
    	name: 'Group',
    	component: Group
    },
    {
    	path: '/mine',
    	name: 'Mine',
    	component: Mine
    },
    {
    	path: '/Index', // 因为index.vue在Index文件夹里，重定向到主页	
    	redirect: '/'
    },
    {
    	path: '*',
    	redirect: '/'  //不匹配上面的路径时重定向到主页
    },
  ]
})
