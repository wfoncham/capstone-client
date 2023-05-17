import React, { useState } from "react";
import "./LetterPage.scss";
import logoletter from "../../assets/images/IMG_8273.png";
import { Link } from "react-router-dom";

const LetterPage = () => {
	const [selected, setSelected] = useState("");

	const handleSelection = (letter) => {
		setSelected(letter);
	};
	
	const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


	return (
		<section>
			<img className="letter__logo" src={logoletter} alt="" />
			<div className="horizontal-scroll-container">
				<div className="horizontal-scroll-content">
					{
						letters.map((letter) =>
							<button 
							key={letter}
								onClick={() => handleSelection(letter)} 
								className={`item ${selected === letter ? "selected":"not-selected"}`}
								>
									{letter} 
							</button>
						)
						
					}
					
					
				</div>
			</div>
			
			<Link to={selected ? `/continent/B/${selected}` : "#"}>
				<div className="letter__next">
					<button className="letter__next--button">Next</button>
				</div>
			</Link>
			<Link to={"/gender"}>
				<div className="letter__back">
					<button className="letter__back--button">Go Back</button>
				</div>
			</Link>
		</section>
	);
};

export default LetterPage;
