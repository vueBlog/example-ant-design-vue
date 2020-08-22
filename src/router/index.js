import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '项目介绍',
      keywords: '项目介绍 | 樊小书生博客实例',
      description: '项目介绍 | 樊小书生博客实例'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/select',
    name: 'select',
    meta: {
      title: 'Select 相关实例',
      keywords: 'Select 相关实例 | 樊小书生博客实例',
      description: 'Select 相关实例 | 樊小书生博客实例'
    },
    component: () => import(/* webpackChunkName: "select" */ '@/views/Select.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
