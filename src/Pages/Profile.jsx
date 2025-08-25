import { useState, useEffect, useContext } from "react";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import BookScroll from "../Components/BookScroll";
import Header from "../Components/Header";
import ProfileCard from "../Components/ProfileCard";
import Review from "../Components/Review";
import ReviewBox from "../Components/ReviewBox";
import Footer from "../Components/Footer";
import UserContext from "../../UserContext";

function Profile() {
	const BASE_URL = "https://ccdaniel.pythonanywhere.com//api/me";
	const [userData, setUserData] = useContext(UserContext);
	const [replyProfile, setReplyProfile] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const token = userData.token;
				if (!token) {
					throw new Error(`No auth token available (How did you get here?)`);
				}
				const fetchOption = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "*/*",
						Authorization: `Bearer ${token}`,
					},
				};
				const responseProfile = await fetch(BASE_URL, fetchOption);

				if (!responseProfile.ok) {
					throw new Error(
						`Authentication failed with status: ${responseProfile.status} (${responseProfile.statusText})`
					);
				}
				let userProfile = await responseProfile.json();
				userProfile = JSON.parse(JSON.stringify(userProfile));
				console.log(userProfile);

				setReplyProfile(userProfile);
			} catch (e) {
				console.log(e);
			}
		};
		fetchUser();
	}, [userData]);

	return (
		<>
			<div className="main">
				<Header />
				<ProfileCard
					username={replyProfile.username}
					regDate={replyProfile.timestamp}
					gender={replyProfile.gender}
					id={replyProfile.id}
				/>
				<div className="container">
					<div className="prof-landing-row row">
						<div className="prof-landing-body-text col-lg-10 col-12">
							<div className="row">
								<BookScroll title="Favorite Books" />
							</div>
							<div className="prof-landing-text-row row">
								<ReviewBox
									title="User Reviews"
									reviews={[
										<Review stars={5} />,
										<Review stars={4} />,
										<Review stars={2} />,
									]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Profile;
