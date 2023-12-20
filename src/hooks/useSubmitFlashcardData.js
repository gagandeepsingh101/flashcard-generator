import toast from "react-hot-toast";

export const useSubmitFlashcardData = (values, resetForm) => {
	// Log the submitted values for debugging or verification
	console.log(values);

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

	// Check if 'flashcards' key exists in local storage
	if (localStorage.getItem("flashcards") === null) {

		// If not, create a new array with the current flashcard data and store it
		localStorage.setItem("flashcards", JSON.stringify([data]));
	} 
    else {

		// If 'flashcards' key exists, retrieve the existing data from local storage
		const flashcards = JSON.parse(localStorage.getItem("flashcards"));

		// Add the current flashcard data to the existing array
		flashcards.push(data);
        
		// Store the updated array back in local storage
		localStorage.setItem("flashcards", JSON.stringify(flashcards));
	}

	// Reset the form after successful submission
	resetForm();
};
