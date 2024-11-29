import React from 'react'
import { useParams } from 'react-router-dom'
const Test = () => {
    const params=useParams()
  return (
    <div>Test
{params.title}

    </div>
  )
}

export default Test