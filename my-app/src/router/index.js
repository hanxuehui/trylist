import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Registry from '@/components/registry'
import List from '@/components/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/registry',
      name: 'registry',
      component:Registry
    },{
      path: '/list',
      name: 'List',
      component:List
    }
  ]
})
