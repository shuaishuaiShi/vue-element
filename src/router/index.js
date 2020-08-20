import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Component from '@/components/Component'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Component',
      name: 'Component',
      component: Component
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
