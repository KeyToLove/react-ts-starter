import React, { useState } from 'react'
import { GREETING } from '@/constants'
import reactLogo from '@/assets/images/react.svg'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{GREETING}</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Jump to <Link to={{ pathname: '404' }}>404</Link> test route
      </p>
    </>
  )
}

export default Welcome
