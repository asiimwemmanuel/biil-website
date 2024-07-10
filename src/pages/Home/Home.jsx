import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import FillBox from "../../assets/images/Fill-Box.png";
import CardList from "../../components/CardList/CardList.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map.jsx";
import "./Home.css";

function Home() {
	useEffect(() => {
		if (!localStorage.getItem("CartItems")) {
			localStorage.setItem("CartItems", "[]");
		}
	}, []);

	return (
		<div
			style={{
				color: "white",
				width: "100vw",
				position: "absolute",
				height: "100vh",
				top: 0,
				left: 0,
			}}
		>
			<Header />
			<div style={{ overflowX: "hidden" }}>
				<Carousel indicators={false} interval={3000}>
					<Carousel.Item>
						<div className="carousel-pic"></div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="carousel-pic2"></div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="carousel-pic3"></div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="carousel-pic4"></div>
					</Carousel.Item>
				</Carousel>
				{/* <Modal /> */}
				<div className="fill-box">
					<img src={FillBox} alt="Fill Box" />
					<div className="fill-box-text">Your Perfect</div>
				</div>
				<h1
					className="fill-box-text"
					style={{
						marginTop: "-75px",
						fontSize: "130px",
						padding: "0px",
					}}
				>
					Home
				</h1>
			</div>
			<h2 className="explore">Explore our locations</h2>
			<div className="cardDiv">
				<CardList />
			</div>
			<div className="map-container">
				<h1
					style={{
						color: "black",
						fontFamily: "Volterra-Regular",
						fontSize: "35px",
						marginTop: "30px",
					}}
				>
					BIIL
				</h1>
				<p style={{ color: "#000000" }}>
					Get directions to our <br />
					locations using the map
				</p>
				<Map />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
