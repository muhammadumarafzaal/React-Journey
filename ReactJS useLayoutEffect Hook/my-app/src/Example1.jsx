import React from 'react'
import {useLayoutEffect,useState,useRef } from 'react'

function Example1() {
    const boxRef = useRef()
    const [height,setHeight] = useState(0)
    //to measure the height of the box we will use useLayoutEffect because it runs synchronously after all DOM mutations but before the browser has a chance to paint, ensuring that we get the correct measurements before any visual updates occur.
    useLayoutEffect(()=>{
        const boxHeight = boxRef.current.getBoundingClientRect().height
        setHeight(boxHeight)
    },[])
  return (
    <div>
        <div ref={boxRef} style={{width:'200px',height:'200px',backgroundColor:'red',marginBottom:'20px'}}>
               HELLO WORLD MEASURE ME
        </div>
        <p>Height: {height}px</p>
      
    </div>
  )
}

export default Example1
