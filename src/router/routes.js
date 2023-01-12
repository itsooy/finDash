
const routes = [
  { path: '/', component: () => import('pages/Auth.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue'), meta: {requiresAuth: true} },
      { path: '/giris', component: () => import('components/girisSayfasi.vue') }

    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
