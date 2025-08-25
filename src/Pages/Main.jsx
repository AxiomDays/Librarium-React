import { useState, useEffect, useContext } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../Components/Header.jsx";
import LandingBody from "../Components/LandingBody.jsx";
import Footer from "../Components/Footer.jsx";
import LibraButtonRef from "../Components/LibraButtonRef.jsx";
import UserContext from "../../UserContext.jsx";

//make search page separate X
//make listing page for books and members X
//about page {X}
//make logging modal X
//use root variable to centralize colors 
//replace review stars colors X
//create bar chart on book page
//add book addition page X
//add page for lost url 

/* STYLE */
/* Find two solid fonts
 * style the mobile navbar with big dividers
 */

function Main() {
	const [userData, setUserData] = useContext(UserContext);

	/*useEffect(() => {
		let pos = Math.floor(Math.random() * 100);
		const target = document.getElementsByClassName("main");
		console.log(target);
		target.style.setProperty("--bg-position", pos + "%");
	});*/

	return (
		<>
			<div className="main">
				<Header />

				<div className="container-fluid">
					<div className="text-row row">
						<div className="BangerFrontText col-12 col-lg-6">
							SIGN UP RIGHT NOW AND SHARE THE READING EXPERIENCE WITH YOUR
							FRIENDS
						</div>
					</div>

					{!userData ? (
						<div className="button-row">
							<div className="col-lg-3 col-md-6 col-12">
								<LibraButtonRef
									btntext="Sign-in or Register"
									linkref="/auth/signup"
								/>
							</div>
						</div>
					) : (
						<></>
					)}
				</div>

				<LandingBody className="landing" />
			</div>
			<Footer />
		</>
	);
}

export default Main;
