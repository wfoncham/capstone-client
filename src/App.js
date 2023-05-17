import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "../src/pages/StartPage/StartPage.js";
import SignInPage from "./pages/SignInPage/SignInPage.js";
import GenderPage from "./pages/GenderPage/GenderPage.js";
import LetterPage from "./pages/LetterPage/LetterPage";
import ContinentPage from "./pages/ContinentPage/ContinentPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import GirlLetterPage from "./pages/GirlLetterPage/GirlLetterPage";
import SurpriseLetterPage from "./pages/SurpriseLetterPage/SurpriseLetterPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/gender" element={<GenderPage />} />
					<Route path="/letter" element={<LetterPage />} />
          <Route path="/lettergirl" element={<GirlLetterPage />} />
          <Route path="/lettersurprise" element={<SurpriseLetterPage />} />
					<Route path="/continent/:gender/:letter" element={<ContinentPage />} />
					<Route path="/results/:gender/:letter/:continent" element={<ResultsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
