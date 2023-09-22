import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailCard from "./ProductDetailCard";
import App from "./App";
const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route
					exact
					path='/product/:id'
					element={<ProductDetailCard />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
