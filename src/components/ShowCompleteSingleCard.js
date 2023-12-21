import React, { useState } from "react";
import {
	IoIosArrowBack,
	IoIosArrowForward,
	IoIosArrowRoundBack,
} from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Model from "./Model";
import Share_Print_DownloadComponent from "./Share_Print_DownloadComponent";

const ShowCompleteSingleCard = () => {
	const [activeTermInfoIndex, setActiveTermInfoIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();
	const allFlashCardData = useSelector((state) => state.flashCard);
	const [singleFlashCardData] = allFlashCardData.filter(
		(card) => card.id === Number(id)
	);
	const { groupInfo, termInfo } = singleFlashCardData.flashCardsData;
	return (
		<div className="w-full h-full  md:overflow-hidden">
			{showModal && <Model setShowModal={setShowModal} />}
			<div className="flex flex-col  w-full h-[15%] items-center md:gap-3">
				<h1 className="text-lg w-full h-1/2 flex items-center gap-3 md:text-2xl font-bold">
					<IoIosArrowRoundBack
						onClick={() => navigate("/show")}
						className="w-10 h-10 text-gray-400 cursor-pointer hover:text-red-500"
					/>
					<span>{groupInfo.groupName}</span>
				</h1>
				<p className="w-[63%] md:w-[92%] mx-auto h-1/2 ">
					{groupInfo.groupDescription}
				</p>
			</div>
			<div className="w-full h-[85%]  flex flex-wrap py-4 md:gap-5">
				<div className=" w-4/12 h-1/2 mx-auto p-2  flex flex-col gap-2 bg-white rounded-xl text-gray-500 md:w-2/12 md:h-3/4 md:py-2 md:px-4">
					<div className="flex flex-col gap-2 w-full h-[10%]">
						<h1 className="text-sm w-full h-fit font-bold md:text-base">
							Flashcards
						</h1>
						<hr className="shadow-2xl shadow-gray-500 rounded-full bg-transparent" />
					</div>
					<div className="w-full h-[90%] flex flex-col gap-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-red-500 scrollbar-thumb-rounded-full ">
						{termInfo.map((term, index) => (
							<p
								onClick={() => setActiveTermInfoIndex(index)}
								className={
									"cursor-pointer w-full truncate hover:text-red-500 " +
									(activeTermInfoIndex === index
										? " text-red-500 font-bold"
										: " text-black")
								}
								key={index}>
								{term.termName}
							</p>
						))}
					</div>
				</div>
				<div className="w-7/12 h-4/5 mx-auto flex flex-col gap-3    rounded-xl md:w-7/12 md:h-full">
					<div className="w-full h-5/6 p-5 flex-col flex rounded-xl items-center justify-evenly bg-white md:flex-row">
						<img
							srcSet={termInfo[activeTermInfoIndex].termImage}
							className=" w-full h-2/3 md:w-[45%] md:h-3/4"
							alt=""
						/>
						<p className="w-11/12 truncate h-1/4 md:w-[45%] md:h-3/4">
							{termInfo[activeTermInfoIndex].termDescription}
						</p>
					</div>
					<div className="w-2/12 mx-auto flex justify-center items-center h-1/6">
						<button
							disabled={activeTermInfoIndex === 0}
							onClick={() => setActiveTermInfoIndex(activeTermInfoIndex - 1)}
							className={
								" w-fit h-fit text-black cursor-pointer hover:text-red-500 disabled:text-red-200 "
							}>
							<IoIosArrowBack className="w-7 h-7" />
						</button>
						<p className="w-10/12 h-fit text-center ">
							{activeTermInfoIndex + 1}/{termInfo.length}
						</p>
						<button
							disabled={activeTermInfoIndex === termInfo.length - 1}
							onClick={() => setActiveTermInfoIndex(activeTermInfoIndex + 1)}
							className=" w-fit h-fit text-black cursor-pointer hover:text-red-500 disabled:text-red-200">
							<IoIosArrowForward className="w-7 h-7" />
						</button>
					</div>
				</div>
				<Share_Print_DownloadComponent setShowModal={setShowModal} />
			</div>
		</div>
	);
};
export default ShowCompleteSingleCard;
