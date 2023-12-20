import { configureStore } from "@reduxjs/toolkit";
import flashCardSlice from "./flashcardReducers";
const store=configureStore({
    reducer: {
        flashCard: flashCardSlice
    }
});

export default store;