import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateFlashCard from "./pages/CreateFlashCard";
import ShowFlashCard from "./pages/ShowFlashCard";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
    errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <CreateFlashCard />,
				errorElement: <Error />,
			},
			{
				path: "/show",
				element: <ShowFlashCard />,
        errorElement: <Error />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App></App>
		</RouterProvider>
	</React.StrictMode>
);
reportWebVitals();
