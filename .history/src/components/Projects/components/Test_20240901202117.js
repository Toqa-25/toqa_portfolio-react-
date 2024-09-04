import React from 'react'
import { useParams } from 'react-router-dom'

const Test = () => {
  const param = useParams()
  console.log(param.id)
  return (
    <div>Test</div>
  )
}

export default Test