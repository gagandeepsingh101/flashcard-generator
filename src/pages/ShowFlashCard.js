import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalFlashcarData } from "../redux/flashcardReducers";
const ShowFlashCard = () => {
	const flashCardData = useSelector((state) => state.flashCard);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getLocalFlashcarData());
	}, [dispatch]);
	console.log(flashCardData)
	return (
		<div className=" mx-auto w-11/12 h-[82vh]">
			<h1 className="text-3xl font-bold underline">Show FlashCard</h1>
		</div>
	);
};

export default ShowFlashCard;
