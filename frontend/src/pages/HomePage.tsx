import React from 'react'
import NavMobile from '../components/NavMobile'
import CreatePost from '../components/CreatePost'
import PostComponent from '../components/PostComponent'

function HomePage() {
  return (
    <>
      <section className='w-full'>
        <NavMobile/>
        <section className='p-2 flex flex-col gap-4'>
            <CreatePost/>
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
        </section>
      </section>
    </>
  )
}

export default HomePage
