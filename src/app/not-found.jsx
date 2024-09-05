import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <h2>The page you are looking for does not exist</h2>
        <Link href='/'>Back Home</Link>
    </div>
  )
}

export default NotFound