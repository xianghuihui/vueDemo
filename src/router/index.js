import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import Dashboard from '@/components/Dashboard'
import Main from '@/components/Main'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

let routes = [
    {
      path: '/user',
      name: 'login',
      component: login
    },
    {
      path:'/',
      component: Main,
      hidden: true,
      meta : {
        requireAuth: true,
      },
      children: [{
        path: '/',
        component:Dashboard,
        name:'首页'
      }]
    }
]

import {
  SystemRouter
} from './system'

for (let i in SystemRouter){
  routes.push(SystemRouter[i])
}

const router = new Router({
  routes: routes
})

export default router;
