import React, { useState } from "react";
import { useSelector } from "react-redux";
import RenderCard from "./RenderCard";

const ShowAllCards = () => {
	// Fetching flash card data from Redux store
	const allFlashCardData = useSelector((state) => state.flashCard);

	// State to determine whether to show all cards or a subset
	const [showAllCards, setShowAllCards] = useState(false);

	// Determine the data to display based on the showAllCards state
	const sliceAllFlashCardData = showAllCards
		? allFlashCardData
		: [...allFlashCardData.slice(0, 6)];

	return (
		<div className="w-full h-full flex flex-wrap lg:justify-center">
			{/* Mapping over the sliced flash card data and rendering each card */}
			{sliceAllFlashCardData.map((data, index) => (
				<RenderCard key={data.id} data={data} index={index}></RenderCard>
			))}

			{/* Button to toggle between showing all cards and a subset */}
			<button
				onClick={() => setShowAllCards(!showAllCards)}
				className={
					"w-full lg:w-11/12 p-4 text-lg md:text-right text-red-500 hover:text-red-700 font-bold " +
					(allFlashCardData.length <= 6 ? "hidden" : "")
				}>
				{showAllCards ? "See Less" : "See All"}
			</button>
		</div>
	);
};

export default ShowAllCards;
