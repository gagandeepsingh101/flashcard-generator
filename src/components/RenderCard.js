import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiTireIronCross } from "react-icons/gi";
import { Link } from "react-router-dom";
import { deleteFlashcard } from "../redux/flashcardReducers";
import { useDispatch } from "react-redux";

const RenderCard = ({ data, index }) => {
	const { groupInfo, termInfo } = data.flashCardsData;
	const dispatch = useDispatch();
	return (
		<div
			key={data.id}
			className="relative w-full h-[45%] flex flex-col justify-between shadow-lg mx-2 lg:mx-10 mt-10 shadow-red-100 rounded-xl bg-white my-3 px-3 py-2 border-2 md:w-[45%] md:h-[50%] lg:w-1/4 lg:h-2/5">
			{index <= 2 ? (
				// Rendering for the first three cards
				<>
					<img
						srcSet={groupInfo.groupImage}
						className="w-20 h-20 rounded-full mx-auto absolute -top-10 left-1/3 translate-x-2 md:translate-x-1/4"
						alt=""
					/>
					<div className="w-full h-[70%] absolute left-0 top-1/4 flex flex-col justify-between items-center">
						<h1 className="h-1/4 flex flex-col text-center font-bold truncate">
							{groupInfo.groupName}
						</h1>
						<p className="  w-full h-1/2 flex flex-col overflow-hidden text-center ">
							<span className=" w-full text-sm h-3/4 overflow-hidden ">{groupInfo.groupDescription}</span>
							<span className="w-full h-1/4">{termInfo.length} Cards</span>
						</p>
						<Link
							to={`/show/${data.id}`}
							className="w-6/12 mx-auto h-fit border-2 border-red-500 text-center px-3 py-1 rounded-md text-red-500 font-bold hover:border-red-700 hover:text-red-700 transition-all duration-200 ease-linear">
							View Cards
						</Link>
					</div>
					<GiTireIronCross
						onClick={() => dispatch(deleteFlashcard(data.id))}
						className=" text-red-500 hover:text-red-700 absolute -right-2 -top-2 w-8 h-8 cursor-pointer transition-all duration-200 ease-linear hover:rotate-180"
					/>
				</>
			) : (
				// Rendering for the rest of the cards
				<>
					<div className="w-full h-1/3 flex items-center gap-4">
						<img
							src={groupInfo.groupImage}
							className="w-16 h-full rounded-full"
							alt=""
						/>
						<h1 className="w-3/5 flex flex-col">
							<span className="font-bold truncate">{groupInfo.groupName}</span>
							<span>{termInfo.length} Cards</span>
						</h1>
					</div>
					<p className="w-full h-1/3">{groupInfo.groupDescription}</p>
					<Link
						to={`/show/${data.id}`}
						className="w-fit h-1/5 flex gap-0 items-center text-red-500 hover:text-red-700 transition-all duration-200 ease-linear hover:gap-3">
						<span className="font-bold">View More</span>
						<IoIosArrowRoundForward className="w-10 h-full" />
					</Link>
					<GiTireIronCross
						onClick={() => dispatch(deleteFlashcard(data.id))}
						className=" text-red-500 hover:text-red-700 absolute -right-2 -top-2 w-8 h-8 cursor-pointer transition-all duration-200 ease-linear hover:rotate-180"></GiTireIronCross>
				</>
			)}
		</div>
	);
};
export default RenderCard;
