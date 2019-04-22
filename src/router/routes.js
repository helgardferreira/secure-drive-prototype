const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/registration',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Registration.vue') }]
  },
  {
    path: '/login',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login.vue') }]
  },
  {
    path: '/booking',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Booking.vue') }],
    meta: {
      requiresAuth: true
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
