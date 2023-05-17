import React, { useState } from "react";
import "./SurpriseLetterPage.scss";
import logoletter from "../../assets/images/IMG_8273.png";
import { Link } from "react-router-dom";

const SurpriseLetterPage = () => {
	const [selected, setSelected] = useState("");

	const handleSelection = (letter) => {
		setSelected(letter);
	};
	
	const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


	return (
		<section>
			<img className="girl__logo" src={logoletter} alt="" />
			<div className="horizontal-scroll-container">
				<div className="horizontal-scroll-content">
					{
						letters.map((letter) =>
							<button
							key={letter}
								onClick={() => handleSelection(letter)} 
								className={`item__surprise ${selected === letter ? "selected__surprise":"not-selected__surprise"}`}
								>
									{letter} 
							</button>
						)
						
					}
					
					
				</div>
			</div>

			<Link to={`/continent/S/${selected}`}>
				<div className="surprise__next">
					<button className="surprise__next--button">Next</button>
				</div>
			</Link>
			<Link to={"/gender"}>
					<div className="surprise__back">
						<button className="surprise__back--button">Go Back</button>
					</div>
				</Link>
		</section>
	);
}

export default SurpriseLetterPage;