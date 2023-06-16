'use client';
import Image from 'next/image'
import FormComponent from '@/components/Form';
import Result from '@/components/Result';
import { useState } from 'react'


export default function Home() {
  const [ result, setResult] = useState();
  const handleFormSubmit = (MainValue) => {
    setResult(MainValue)
  };
  return (
    <>
    <div className="container_content">
      <div className="content_area">
        <h1 >আপনার যাকাতের হিসাব পরিমাপ করুন </h1>
        <div className="wrapper mt-5">
          <FormComponent onSubmit={handleFormSubmit}/>
          <Result MainValue={result}/>
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
