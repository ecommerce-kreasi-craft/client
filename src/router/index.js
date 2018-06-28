import Vue from 'vue'
import Router from 'vue-router'
import cHome from '@/components/com-home.vue'
import cCart from '@/components/com-cart.vue'
import cAdminAddItem from '@/components/com-admin-additem.vue'
import cLogin from '@/components/com-login.vue'
import cSignup from '@/components/com-signup.vue'
import cProfile from '@/components/com-profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: cHome
    },
    {
      path: '/cart',
      name: 'cart',
      component: cCart
    },
    {
      path: '/additem',
      name: 'additem',
      component: cAdminAddItem
    },
    {
      path: '/login',
      name: 'login',
      component: cLogin
    },
    {
      path: '/signup',
      name: 'signup',
      component: cSignup
    },
    {
      path: '/profile',
      name: 'profile',
      component: cProfile
    }
  ]
})
