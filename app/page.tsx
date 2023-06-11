'use client';

import Image from 'next/image'
import Form from '@/components/Form'
import Result from '@/components/Result'
import { useState } from 'react'

// sabbir.hosain@sslwireless.com

export default function Home() {
  const [ state, setState] = useState(0)
  return (
    <div className="md:container md:mx-auto">
      <h1 >This is Tip top page</h1>
      <div className="wrapper">
        <Form/>
        <Result/>
      </div>
    </div>
  )
}
