import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import WriteView from '../views/WriteView.vue'
import ReadView from '../views/ReadView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'List',
        component: ListView,
      },
      {
        path: '/write',
        name: 'Write',
        component: WriteView
      },
      {
        path: '/:id',
        name: 'Read',
        component: ReadView,
        props: true
      },
      {
        path: '/find',
        name: 'Search',
        component: ListView,
        props: routes => ({ search: routes.query.q })
      }
    ]
  })

  export default router