import React from "react";
import { useSelector } from "react-redux";

const ShowFlashCard = () => {
	const data=useSelector((state)=>state.flashcards);
	console.log(data);
	const flashCardsData= JSON.parse(localStorage.getItem("flashcards"));
	console.log(flashCardsData);
	return (
		<div className=" mx-auto w-11/12 h-[82vh]">
			<h1 className="text-3xl font-bold underline">Show FlashCard</h1>
		</div>
	);
};

export default ShowFlashCard;
