import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CalalogPage/CatalogPage";
import CarPage from "./pages/CarPage/CarPage";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/catalog/:id" element={<CarPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
