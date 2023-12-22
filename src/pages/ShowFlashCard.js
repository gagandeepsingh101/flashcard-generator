import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getLocalFlashcarData } from "../redux/flashcardReducers";

const ShowFlashCard = () => {
  // Retrieve flashcard data from Redux store
  const flashCardData = useSelector((state) => state.flashCard);

  // Initialize Redux dispatch function
  const dispatch = useDispatch();

  // Fetch local flashcard data when the component mounts
  useEffect(() => {
    dispatch(getLocalFlashcarData());
  }, [dispatch]);

  return (
    <div className="mx-auto w-11/12 h-[82vh] flex flex-wrap gap-10 justify-center py-3 overflow-y-scroll overflow-x-hidden scrollbar-thumb-red-500 scrollbar-thin scrollbar-thumb-rounded-full">
      {/* Display a message when no flashcards are found */}
      {flashCardData.length === 0 && (
        <div className="w-full h-2/3 flex flex-col gap-6 justify-center items-center">
          <h1 className="text-3xl font-bold">No FlashCard Found</h1>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to={"/"}>
            {/* Link to the create flashcard page */}
            Go to Create Flashcard Page
          </Link>
        </div>
      )}

      {/* Render flashcards using React Router Outlet */}
      {flashCardData.length > 0 && <Outlet />}
    </div>
  );
};

export default ShowFlashCard;
