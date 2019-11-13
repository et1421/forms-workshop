import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const dynamic = [
  { name: 'basic-form', path: './views/BasicForm' },
  { name: 'input-masking', path: './views/InputMasking' },
  { name: 'accessibility', path: './views/Accessibility' },
  { name: 'validation', path: './views/Validation' }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...dynamic.map(r => {
      return {
        path: `/${r.name}`,
        name: r.name,
        component: () => import(`${r.path}.vue`)
      }
    })
  ]
})
