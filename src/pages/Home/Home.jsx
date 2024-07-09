// issue with click event logic

import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import FillBox from "../../assets/Fill-Box.png";
import ContactUs from "../../components/ContactUs/ContactUs.jsx";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map.jsx";
import CardList from "./CardList/CardList.jsx";
import "./Home.css";

function Home() {
	const [showPopup, setShowPopup] = useState(false);
	const [iframeSrc, setIframeSrc] = useState("");

	const formURLs = [
		"https://docs.google.com/forms/d/e/1FAIpQLScbibvgHFiD9XLLqKOI6lzD609Gay1_j-mGiazOmRR58i9sjQ/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLScGF1cXNsPOKFBaDMftH33-vw5dmhNAH9m-FTGh-RJopMjJuA/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLSfm9qzSy6FNQNCnSrSx1p8WKZxdGpccNSRH6nzW1lG2q_NGOg/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLSc84YZpvjGgjBJcgpEvkaIrJpFr0TZjNl60Z167gTOezkw4MA/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLSc4F8YyqeQWztgjIE5hWmztEBbhREQMKkbM348c_OAJ6gVA_g/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLScgNxszNqGswiJZt5AhbNdSNcNEqawmYtJHeJcEXOFf4PR5KQ/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLSe2mkoEKa0Dswopbtjt9fL3bS2yzzsztcig3k2rQdoXKLTgaA/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLSfhpOHdPwj6u6ucf5xsRlk2Lsl5NrWqM_cP7WJ_-BLw6AW4lQ/viewform?embedded=true",
		"https://docs.google.com/forms/d/e/1FAIpQLSeguM6NHb3fwzTVZ728j_6FWWRIEPpfSkjsfamLpzIUX_FPaw/viewform?embedded=true",
	];

	const handleCardClick = (index) => {
		setIframeSrc(formURLs[index]);
		setShowPopup(!showPopup);
	};

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
				<CardList onCardClick={handleCardClick} />
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

			{/* Popup Modal - code gud */}
			{showPopup && (
				<div className="popup">
					<div className="popup-content">
						<span
							onClick={() => setShowPopup(false)}
							className="close-btn"
						>
							&times;
						</span>
						<iframe
							src={iframeSrc}
							width="640"
							height="739"
							frameborder="0"
							marginheight="0"
							marginwidth="0"
						>
							Loading…
						</iframe>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
