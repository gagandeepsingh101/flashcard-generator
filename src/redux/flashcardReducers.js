import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const flashCardSlice = createSlice({
	initialState: [],
	name: "flashCard",
	reducers: {
		addFlashCardData: (state, action) => {
			state.push(action.payload);
		},
		getLocalFlashcarData: () => {
			const data = JSON.parse(localStorage.getItem("flashcards"));
			if (data) {
				return [...data];
			}
		},
		deleteFlashcard: (state, action) => {
			const data = JSON.parse(localStorage.getItem("flashcards"));
			if (data) {
				const filterFlashCard = data.filter(
					(item) => item.id !== action.payload
				);
				localStorage.setItem("flashcards", JSON.stringify(filterFlashCard));
				toast.success("Flashcard deleted successfully");
				return [...filterFlashCard];
			}
		},
	},
});
export const {
	addFlashCardData,
	getLocalFlashcarData,
	deleteFlashcard,
} = flashCardSlice.actions;
export default flashCardSlice.reducer;
