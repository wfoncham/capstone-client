import resultpic from "../../assets/images/IMG_8273.png";
import React,  { useEffect, useState } from "react";
import "./ResultsPage.scss";
import { useParams } from "react-router-dom";

function ResultsPage() {
	const { gender, letter, continent } = useParams();
    const [name, setName] = useState('');
	useEffect (() => {
			const fetchData = async () => {try {
				const response = await fetch("http://localhost:8000/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						gender: gender,
						letter: letter,
						region: continent,
					}),
				});

				const data = await response.json();
				if (response.status !== 200) {
					throw (
						data.error ||
						new Error(`Request failed with status ${response.status}`)
					);
				}
				setName(data.result.replace(/(\r\n|\n|\r)/gm, ""));
			} catch (error) {
				
				console.error(error);
				alert(error.message);
			}}
        fetchData();
        
		},
		[gender, letter, continent]);
	return (
		<div className="results">
			<img className="results__logo" src={resultpic} alt="" />
			<h1 className="results__head">Congratulations!</h1>
			<p className="results__words">
				Based on your choice of gender, letter and region, your baby's name is
			</p>
            <p className="results__name">{name}</p>
		</div>
	);
}

export default ResultsPage;
