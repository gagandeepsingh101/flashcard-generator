import { createSlice } from "@reduxjs/toolkit";

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
	},
});
export const { addFlashCardData, getLocalFlashcarData } =
	flashCardSlice.actions;
export default flashCardSlice.reducer;
