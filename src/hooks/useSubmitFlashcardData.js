import toast from "react-hot-toast";
import { addFlashCardData } from "../redux/flashcardReducers";
export const useSubmitFlashcardData = (values, resetForm, dispatch) => {

	// Check if a Group image is uploaded
	if (values.groupInfo.groupImage === "") {
		toast.error("Please upload a Group image");
		return;
	}

	// Check if all Term images are uploaded
	if (values.termInfo.map((term) => term.termImage).includes("")) {
		toast.error("Please upload images for all terms");
		return;
	}

	// Display success toast upon successful flashcard creation
	toast.success("Flashcard created successfully");

	// Prepare data for storage
	const data = {

		// Generate a unique ID for the flashcard data
		id: Math.floor(Math.random() * 10 ** 15),

		// Store the entire flashcard data in the 'flashCardsData' property
		flashCardsData: values,
	};

	// Add Flashcard data to redux store
	dispatch(addFlashCardData(data));

	// Check if 'flashcards' key exists in local storage
	if (localStorage.getItem("flashcards") === null) {

		// If not, create a new array with the current flashcard data and store it
		localStorage.setItem("flashcards", JSON.stringify([data]));
	} else {

		// If 'flashcards' key exists, retrieve the existing data from local storage
		let flashcards = JSON.parse(localStorage.getItem("flashcards"));

		// Add the current flashcard data to the existing array
		flashcards=[...flashcards, data];

		// Store the updated array back in local storage
		localStorage.setItem("flashcards", JSON.stringify(flashcards));
	}

	// Reset the form after successful submission
	resetForm();
};
