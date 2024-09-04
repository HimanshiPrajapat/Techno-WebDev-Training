import React, { useEffect, useRef } from 'react'

const Ref = () => {
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current,focus();
    },[])
  return (
    <div  className='p-8'>
        <input ref={inputRef} type='text' placeholder='Enter Name'/>
        <button className='bg-orange-600' onClick={()=>{console.log(inputRef.current.value)}}>Show ref value</button>
    </div>
  )
}

export default Ref