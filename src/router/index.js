import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/Layout'
import login from '@/components/Login'
import register from '@/components/register/register'
import home from '@/components/Home'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

let routes = [
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/register',
      name: '登录',
      component: register
    },
    {
      path:'/',
      component: layout,
      hidden: true,
      meta : {
        requireAuth: true,
      },
      children: [{
        path: '/',
        component: home,
        name: '首页'
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
