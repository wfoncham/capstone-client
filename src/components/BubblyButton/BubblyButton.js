import React from "react";
import "./BubblyButton.scss";
import { Link } from "react-router-dom";

class BubblyButton extends React.Component {
	animateButton(e) {
		// e.preventDefault();

		e.target.classList.remove("animate");
		e.target.classList.add("animate");

		setTimeout(function () {
			e.target.classList.remove("animate");
		}, 700);
	}

	render() {
		return (
			<Link to={"/signin"}>
				<button className="start-button" onClick={this.animateButton}>
					Start
				</button>
			</Link>
		);
	}
}

export default BubblyButton;
