import { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'

// React 组件懒加载
const Welcome = lazy(() => import('@/pages/Welcome'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const routers: RouteObject[] = [
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Welcome />
  }
]

export default routers
