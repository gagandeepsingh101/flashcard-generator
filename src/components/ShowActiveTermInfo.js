import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ShowActiveTermInfo = ({
	activeTermInfoIndex,
	setActiveTermInfoIndex,
	termInfo,
}) => {
	return (
		<>
			{/* Displaying selected term */}
			<div className="w-7/12 h-4/5 mx-auto flex flex-col gap-3    rounded-xl md:w-7/12 md:h-full">
				{/* Term content */}
				<div className="w-full h-5/6 p-2 md:p-5 flex-col flex rounded-xl items-center justify-evenly bg-white md:flex-row">
					{/* Term image */}
					<img
						srcSet={termInfo[activeTermInfoIndex].termImage}
						className=" hidden md:block md:w-[45%] md:h-3/4"
						alt=""
					/>
					{/* Term description */}
					<p className="w-11/12 break-all text-justify h-full text-[12px] md:w-[45%] overflow-hidden  md:h-3/4 lg:text-base">
						{termInfo[activeTermInfoIndex].termDescription}
					</p>
				</div>

				{/* Navigation buttons */}
				<div className="w-2/12 mx-auto flex justify-center items-center h-1/6">
					{/* Previous button */}
					<button
						disabled={activeTermInfoIndex === 0}
						onClick={() => setActiveTermInfoIndex(activeTermInfoIndex - 1)}
						className={
							" w-fit h-fit text-black cursor-pointer hover:text-red-500 disabled:text-red-200 "
						}>
						<IoIosArrowBack className="w-7 h-7" />
					</button>
					{/* Page indicator */}
					<p className="w-10/12 h-fit text-center ">
						{activeTermInfoIndex + 1}/{termInfo.length}
					</p>
					{/* Next button */}
					<button
						disabled={activeTermInfoIndex === termInfo.length - 1}
						onClick={() => setActiveTermInfoIndex(activeTermInfoIndex + 1)}
						className=" w-fit h-fit text-black cursor-pointer hover:text-red-500 disabled:text-red-200">
						<IoIosArrowForward className="w-7 h-7" />
					</button>
				</div>
			</div>
		</>
	);
};

export default ShowActiveTermInfo;
