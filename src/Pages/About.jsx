import "./Book.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import BookScroll from "../Components/BookScroll";
import Header from "../Components/Header";
import Review from "../Components/Review";
import TitledTextBox from "../Components/TitledTextBox";
import LandingBody from "../Components/LandingBody";
import BlackBox from "../Components/BlackBox";

function About() {
	return (
		<>
			<Header />
			<BlackBox
				textboxes={[
					["About Us", "We're a unique duo!"],
					["About Us", "We're a unique duo!"],
					[
						"Contact",
						`<a href="https://www.w3schools.com/jsref/jsref_foreach.asp">Meet us here!<a/>`,
					],
				]}
			/>
		</>
	);
}

export default About;
