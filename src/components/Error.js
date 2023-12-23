import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
	// Access the error information from the route
	const error = useRouteError();
	// Access the navigate function from react-router-dom
	const navigate = useNavigate();

	// Render the error boundary page
	return (
		<div
			data-testid="test-error-page"
			className="flex flex-col items-center justify-center h-screen bg-gray-100">
			{/* Error container with styling */}
			<div className="bg-white p-8 rounded-lg shadow-md text-center">
				{/* Error title */}
				<h1 className="text-4xl font-bold text-red-500 mb-4">
					{error.statusText}
				</h1>
				{/* Error message */}
				<p className="text-gray-600 mb-6">{error.error.message}</p>
				{/* "Go back" button with navigation on click */}
				<button
					data-testid="go-back-btn"
					onClick={() => navigate("/")}
					className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
					Go back
				</button>
			</div>
		</div>
	);
};

export default Error;
