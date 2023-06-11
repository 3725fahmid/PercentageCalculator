'use client';

import Image from 'next/image'
import Form from '@/components/Form'
import Result from '@/components/Result'
import { useState } from 'react'

// sabbir.hosain@sslwireless.com

export default function Home() {
  const [ state, setState] = useState(0)
  return (
    <>
    <div className="container_content">
      <div className="content_area">
        <h1 >This is Tip top page</h1>
        <div className="wrapper mt-5">
          <Form/>
          <Result/>
        </div>
        <div className="footer">
          {/* <h2>footewr</h2> */}
        </div>
      </div>
    </div>
    {/* <style jsx>
      `
    
      `
    </style> */}
    </>
  )
}
