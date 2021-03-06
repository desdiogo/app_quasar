
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue'), name: 'home' }
    ],
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    name: 'login'
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
