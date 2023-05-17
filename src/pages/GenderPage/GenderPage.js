import "./GenderPage.scss";
import { Link } from "react-router-dom";
import logohead from "../../assets/images/IMG_8273.png";

function GenderPage() {
	return (
		<section className="gender">
			<div className="gender__header">
				<img className="gender__header--picture" src={logohead} alt="" />
			</div>
			
			<div className="gender__section">
				<Link to={"/letter"}>
					<div className="gender__boy">
						<button className="gender__boy--button">Baby Boy</button>
					</div>
				</Link>
				<Link to={"/lettergirl"}>
					<div className="gender__girl">
						<button className="gender__girl--button">Baby Girl</button>
					</div>
				</Link>

				<Link to={"/lettersurprise"}>
					<div className="gender__surpise">
						<button className="gender__surprise--button">Let's See!</button>
					</div>
				</Link>

				{/* <div className="gender__next">
						<button className="gender__next--button">Next</button>
					</div> */}

				<Link to={"/signin"}>
					<div className="sign__back">
						<button className="sign__back--button">Go Back</button>
					</div>
				</Link>
			</div>
		</section>
	);
}

export default GenderPage;
