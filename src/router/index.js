import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import Main from '@/components/main.vue'
import Yearlyreview from '@/components/yearlyreview.vue'
import Categorization from '@/components/categorization.vue'
import Plan from '@/components/plan.vue'
import Pricea from '@/components/pricea.vue'
import Costsa from '@/components/costsa.vue'
import Negotiation from '@/components/negotiation.vue'
import Biddinga from '@/components/biddinga.vue'
// import Echarts from '@/components/echarts.vue'

Vue.use(VueRouter)

const routes = [
  {
    redirect: '/login',
    name: '',
    path: '/'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home', // path 为空，会作为默认子路由渲染
    name: 'home',
    component: Home,
    redirect: '/main',
    children: [
      { name: 'main', path: '/main', component: Main },
      { name: 'yearlyreview', path: '/yearlyreview', component: Yearlyreview },
      { name: 'categorization', path: '/categorization', component: Categorization },
      { name: 'plan', path: '/plan', component: Plan },
      { name: 'pricea', path: '/pricea', component: Pricea },
      { name: 'costsa', path: '/costsa', component: Costsa },
      { name: 'negotiation', path: '/negotiation', component: Negotiation },
      { name: 'biddinga', path: '/biddinga', component: Biddinga }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
