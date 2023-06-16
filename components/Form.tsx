import React, { useState } from "react";

const FormComponent = ({ onSubmit }:any) => {
  const [takarporiman, setTakarporiman] = useState(0);
  const [golderporiman, setGolderporiman] = useState(0);
  const [ruparporiman, setRuparporiman] = useState(0);


  const MainValue = () => {
    const taka = Number(takarporiman);
    const Taka = ( taka * 0.025 )
    const gold = Number(golderporiman);
    const Gold = ( gold * 0.025 )
    const rupa = Number(ruparporiman);
    const Rupa = ( rupa * 0.025 )
    let Total =  Taka + Gold + Rupa ;
    return Total.toString();
  }


  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit(MainValue);
  };

  return (
    <>
      <div className="container">
        <div className="form_content">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  
                >
                  স্বর্ণের পরিমাণ 
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-gold"
                  type="number"
                  name="golderporiman"
                  placeholder="Enter amount"
                  value={golderporiman}
                  onChange={(e:any) => setGolderporiman(e.target.value)}
                />
                <p className="text-red-500 cursor-pointer text-xs italic">
                স্বর্ণের যাকাত দেয়ার নিয়ম ?</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  
                >
                  রৌপ্যের পরিমাণ 
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-rupa"
                  type="number"
                  name="ruparporiman"
                  placeholder="Gold Amount"
                  value={ruparporiman}
                  onChange={(e:any) => setRuparporiman(e.target.value)}
                />
                <p className="text-red-500 cursor-pointer text-xs italic">
                রৌপ্যের যাকাত দেয়ার নিয়ম ?</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  
                >
                   টাকার পরিমাণ 
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  name="takarporiman"
                  placeholder="Takar poriman"
                  value={takarporiman}
                  onChange={(e:any) => setTakarporiman(e.target.value)}
                />
                <p className="text-red-500 text-xs italic cursor-pointer">
                টাকার যাকাত দেয়ার নিয়ম ?</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
