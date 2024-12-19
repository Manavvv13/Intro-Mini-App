import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>

    
    <div className='absolute top-[5%] w-full py-10 flex justify-center text-xl text-zinc-500 font-semibold'>Hi! Everyone</div>
    <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Intro.</h1>
    <h3 className='absolute bottom-20 left-1/2 -translate-x-[50%] -translate-y-[50%] text-sm text-zinc-200 font-semibold'>These elements are draggable ❤️</h3>
    </div>
    </>
  )
}

export default Background