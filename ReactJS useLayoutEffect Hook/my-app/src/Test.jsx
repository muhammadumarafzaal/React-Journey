import React from 'react'
import { useEffect,useLayoutEffect } from 'react'

function Test() {
    useEffect(()=>{
        console.log('useEffect message')
    },[])

    useLayoutEffect(()=>{
        console.log('useLayoutEffect message')
    },[])
  return (
    <div>
      Test
    </div>
  )
}

export default Test
