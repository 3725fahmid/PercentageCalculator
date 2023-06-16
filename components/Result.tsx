import React from 'react'

const Result = ( { MainValue }:any ) => {
  return (
    <>
     <div className="container">
      <div className="result_content flex flex-col gap-5">
        <h2 className='text-2xl font-extrabold text-green-500'>আপনার যাকাতের পরিমাণ :  </h2>
        <h1>{MainValue} টাকা</h1>
      </div>
     </div>
    </>
  )
}

export default Result;