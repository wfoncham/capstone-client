import StartButton from "../../components/StartButton/StartButton";
import BabyVideo from "../../components/BabyVideo/BabyVideo";
import "./StartPage.scss";

function StartPage() {
	return (
		<div className="home">
			<div className="start">
				<BabyVideo />
			</div>

			
			<div className="start__button">
				<StartButton />
			</div>
			
		</div>
	);
}

export default StartPage;
