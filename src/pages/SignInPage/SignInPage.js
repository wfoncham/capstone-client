import React from "react";
import logofill from "../../assets/images/IMG_8273.png";
import "./SignInPage.scss";
import { Link } from "react-router-dom";

function SignInPage() {
	return (
		<div className="sign">
			<div className="sign__section">
            <Link to={"/"}>
                <img className="sign__logo" src={logofill} alt="tikl" />
            </Link>
				<form>
					<div className="sign__form">
						<label className="sign__form--user" htmlFor="">
							<div className="user__text">Create Username</div> 
							<input
								className="sign__title"
								type="text"
								name="title"
								placeholder="Add a username here"
							/>
						</label>
						<label className="sign__form--password" htmlFor="">
						<div className="pass__text">Create Password</div>
							<input
								className="sign__password"
								type="text"
								name="description"
								placeholder="Add a strong password"
							/>
						</label>
					</div>

					<Link to={"/gender"}>
						<div className="sign__next">
							<button className="sign__next--button">Next</button>
						</div>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default SignInPage;
