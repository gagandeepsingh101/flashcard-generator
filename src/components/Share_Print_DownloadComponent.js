import React from 'react'
import { LiaShareSolid } from "react-icons/lia";
import { SlCloudDownload, SlPrinter } from "react-icons/sl";

const Share_Print_DownloadComponent = ({setShowModal}) => {
  return (
    <div className="w-full h-1/6 mx-auto flex flex-wrap  rounded-xl md:w-2/12  md: flex-col md:h-1/2 md:gap-5 ">
    <button
      onClick={() => setShowModal(true)}
      className=" w-[30%] h-2/3 flex items-center gap-2 text-black cursor-pointer bg-white rounded-xl hover:bg-red-500 hover:text-white md:w-full md:h-1/4 md:px-4">
      <LiaShareSolid className="hidden md:block text-2xl font-bold" />
      <span className="w-full md:text-lg font-bold md:w-auto text-center">Share</span>
    </button>
    <button className="w-[30%] h-2/3 flex  items-center gap-2 text-black cursor-pointer bg-white rounded-xl hover:bg-red-500 hover:text-white  md:w-full md:h-1/4 md:px-4">
      <SlCloudDownload className="hidden md:block text-2xl font-bold" />
      <span className="w-full md:text-lg font-bold md:w-auto text-center">Download</span>
    </button>
    <button className="w-[30%] h-2/3 flex  items-center gap-2 text-black cursor-pointer bg-white rounded-xl hover:bg-red-500 hover:text-white  md:w-full md:h-1/4 md:px-4">
      <SlPrinter className="hidden md:block text-2xl font-bold" />
      <span className="w-full md:text-lg font-bold md:w-auto text-center">Print</span>
    </button>
  </div>

  )
}

export default Share_Print_DownloadComponent; 
