import { useEffect, useState } from "react";
import "./ProfileCard.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function ProfileCard({
	username = "john doe",
	regDate = "XX-XX-XXXX",
	gender = "M",
	id = '?',
}) {
	const [isFlip, setFlip] = useState(false);

	const swapPage = async (element) => {
		console.log(element);

		if (isFlip) {
			element.classList.remove("temp-flip"); // reset animation
			void element.offsetWidth; // trigger reflow
			await new Promise((r) => setTimeout(r, 150));
			console.log("remove");
			setFlip(false);
		}

		if (isFlip == false) {
			element.classList.add("temp-flip"); // reset animation
			void element.offsetWidth; // trigger reflow
			await new Promise((r) => setTimeout(r, 150));
			console.log("add");
			setFlip(true);
		}
	};

	return (
		<>
			<div className="container">
				<div className="row card-row d-flex align-items-center justify-content-center">
					<div
						className="col-md-8 col-lg-6 col-xl-4 col-12 row base-card"
						id="card"
						onClick={() => {
							const element = document.getElementById("in-card");
							swapPage(element);
						}}
					>
						<div className="inner-card" id="in-card">
							<div className="front-card">
								<div className="red-layer row">
									<div
										className="card-img col h-md-auto h-80"
										style={{
											"background-image":
												"url(https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4z6f.jpg)",
										}}
									></div>
									<div className="card-text col-md-7 col-6">
										<h2 className="card-title">Library Card</h2>
										<span>
											<span>
												<p className="user-header trapezoid">
													<span>Username</span>
												</p>
												<p>{username}</p>
											</span>
											<span>
												<p className="user-header trapezoid">
													<span>Gender</span>
												</p>
												<p>{gender}</p>
											</span>
											<span>
												<p className="user-header trapezoid">
													<span>Registration Date</span>
												</p>
												<p>{regDate.split(" ")[0]}</p>
											</span>
										</span>
									</div>
								</div>
								<div className="white-layer extraneous-text row">User ID: {id}</div>
							</div>
							<div className="back-card">
								<h3>About</h3>
								<div className="back-bio">
									<span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Mauris luctus venenatis neque ac pellentesque. Donec id
										luctus orci. Maecenas ullamcorper efficitur lectus, sit amet
										blandit risus congue at. Maecenas scelerisque, odio in
										tempus sollicitudin, felis lectus rhoncus lacus, quis
										lobortis massa nunc vel lorem. Etiam mollis consectetur arcu
										at commodo. Nulla auctor odio eget libero sodales lacinia.
										Proin suscipit elit ut ex convallis, ultricies laoreet sem
										aliquet. Sed volutpat massa eget tortor viverra convallis.
										Sed eu enim eget nunc ornare tincidunt vel viverra turpis.
										Phasellus nec enim vitae enim blandit imperdiet. Integer non
										enim quis nisl porttitor ultricies et eget urna. In
										imperdiet gravida erat aliquet elementum. Vestibulum
										ultrices massa odio, congue viverra neque aliquet vitae.
									</span>
								</div>
								<p className="extraneous-text">RETURN TO OWNER IF FOUND</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileCard;
