import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Inspector } from 'react-dev-inspector'
import './index.less'

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : Fragment

const basename = (process.env.NODE_ENV === 'production' && process.env.BASE_NAME) || '/'

console.log(basename, 'basename')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <InspectorWrapper keys={['control', 'shift', 'f']}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </InspectorWrapper>
)
