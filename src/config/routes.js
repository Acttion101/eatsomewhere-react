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
    component: lazy(() => import('../pages/News'))
  },
  post: {
    path: '/post',
    component: lazy(() => import('../pages/post'))
  },
  Detail: {
    path: '/detail',
    component: lazy(() => import('../pages/Detail'))
  },
  Community: {
    path: '/community',
    component: lazy(() => import('../pages/Community'))
  },
  PostView1: {
    path: '/postview1',
    component: lazy(() => import('../pages/PostView1'))
  }

}
