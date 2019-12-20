
import layout from '@/components/Layout'
import user from '@/components/system/User'

const SystemRouter = [{
  path: '/system',
  name: '用户管理',
  component: layout,
  iconCls: 'fa fa-user',
  children: [{
    path: '/system/user',
    component: user,
    name: '普通用户管理'
  }]
}]

export {
  SystemRouter
}
