
import Link from 'next/link'
import React from 'react'


function About() {
  // throw new Error('Not Today!')
  return (
    <>
      <h1 className='text-2xl'>About</h1>
      <Link href={'/'}>Link To Home</Link>
    </>
  )
}

export default About