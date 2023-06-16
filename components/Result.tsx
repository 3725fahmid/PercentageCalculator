import React from 'react'

const Result = ( { MainValue } ) => {
  return (
    <>
     <div className="container">
      <div className="result_content flex flex-col gap-5">
        <h2 className='text-4xl font-extrabold text-green-500'>আপনার যাকাতের পরিমাণ :  </h2>
        <h1>{MainValue}</h1>
      </div>
     </div>
    </>
  )
}

export default Result;