import React from 'react'
import NavMobile from '../components/NavMobile'
import CreatePost from '../components/CreatePost'
import PostComponent from '../components/PostComponent'
import NavPc from '../components/NavPc'

function HomePage() {
  return (
    <>
      <section className='w-full lg:hidden'>
        <NavMobile/>
        <section className='p-2 flex flex-col gap-4'>
            <CreatePost/>
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
        </section>
      </section>

      <section className="hidden w-full h-screen p-8 lg:flex">
        <div className="w-1/4">
          <NavPc/>
        </div>
        <div className='flex flex-col flex-1 px-20 xl:px-40 2xl:px-60 gap-4 overflow-y-auto scrollbar-hide'>
          <CreatePost/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
        </div>
      </section>
    </>
  )
}

export default HomePage
