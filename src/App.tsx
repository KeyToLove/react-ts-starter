import React from 'react'
import routers from '@/router'
import { useRoutes } from 'react-router-dom'
import Loading from '@/components/Loding'
import './App.less'

function App() {
  const layout = useRoutes(routers)
  return (
    <div>
      <React.Suspense fallback={<Loading />}>{layout}</React.Suspense>
    </div>
  )
}

export default App
