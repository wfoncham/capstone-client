// import ContinentDropdown from "../../components/ContinentDropDown/ContinentDropDown";
import {React, useState} from "react";
import logocont from "../../assets/images/IMG_8273.png";
import "./ContinentPage.scss";
import { Link, useParams } from "react-router-dom";

function ContinentPage() {
	const {gender, letter} = useParams()
  const [selectedContinent, setSelectedContinent] = useState('');

  const handleSelectChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  return (
		<div className="continent">
			<img className="continent__logo" src={logocont} alt="pic" />
      <div className="select">
      <select className="select__option" value={selectedContinent} onChange={handleSelectChange}>
        <option value="">Choose a continent</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Australia">Australia</option>
      </select>
      {selectedContinent && (
        <p className="select__result">Thanks for choosing {selectedContinent}</p>
      )}
    </div>
			<Link to={selectedContinent ? `/results/${gender}/${letter}/${selectedContinent}` : "#"}>
				<div className="continent__next">
					<button className="continent__next--button">Next</button>
				</div>
			</Link>
      <Link to={"/letter"}>
					<div className="continent__back">
						<button className="continent__back--button">Go Back</button>
					</div>
				</Link>
		</div>
	);
}

export default ContinentPage;
