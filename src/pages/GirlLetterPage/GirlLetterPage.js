import React, { useState } from "react";
import "./GirlLetterPage.scss";
import logoletter from "../../assets/images/IMG_8273.png";
import { Link } from "react-router-dom";

const GirlLetterPage = () => {
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
								className={`item__girl ${selected === letter ? "selected__girl":"not-selected__girl"}`}
								>
									{letter} 
							</button>
						)
						
					}
					
					
				</div>
			</div>
			<Link to={`/continent/G/${selected}`}>
				<div className="girl__next">
					<button className="girl__next--button">Next</button>
				</div>
			</Link>
			<Link to={"/gender"}>
					<div className="girl__back">
						<button className="girl__back--button">Go Back</button>
					</div>
				</Link>
		</section>
	);

}

export default GirlLetterPage;