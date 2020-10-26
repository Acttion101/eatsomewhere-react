import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Login: {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/Login'))
  },
  Register: {
    path: '/register',
    exact: true,
    component: lazy(() => import('../pages/Register'))
  },
  News: {
    path: '/news',
    exact: true,
    component: lazy(() => import('../pages/News'))
  },
  post: {
    path: '/post',
    exact: true,
    component: lazy(() => import('../pages/post'))
  },
  Detail: {
    path: '/detail',
    exact: true,
    component: lazy(() => import('../pages/Detail'))
  },
  Community: {
    path: '/community',
    exact: true,
    component: lazy(() => import('../pages/Community'))
  },

  PostView1: {
    path: '/postview1',
    exact: true,
    component: lazy(() => import('../pages/PostView1'))
  },
  PostView2: {
    path: '/postview2',
    exact: true,
    component: lazy(() => import('../pages/PostView2'))
  }
}
