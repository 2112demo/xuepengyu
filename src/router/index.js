import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/view/index/index'
import Task from '@/view/task/task'
import SendRoders from '@/view/sendRoders/sendRoders'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/sendRoders',
      name: 'sendRoders',
      component: SendRoders
    }
  ]
})
