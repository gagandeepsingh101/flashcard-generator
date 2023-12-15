import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<div className="w-screen h-screen bg-red-50 flex flex-col justify-between">
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
