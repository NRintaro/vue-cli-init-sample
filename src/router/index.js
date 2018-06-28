import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Greet from '@/components/Greet'
import Image from '@/components/Image'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/greet',
      name: 'Greet',
      component: Greet
    },
    {
      path: '/image',
      name: 'Image',
      component: Image
    }
  ]
})
