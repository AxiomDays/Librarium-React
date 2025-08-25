import { useEffect, useState, useContext } from "react";
import "./ProfileCard.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./LibraButton.css";
import UserContext from "../../UserContext";

function LibraButton({ btntext = "Button", linkref = "#", modalTarget = "" }) {
	const BASE_URL = "https://ccdaniel.pythonanywhere.com//api";

	const [userData, setUserData] = useContext(UserContext);

	const [Rating, setRating] = useState(1);
	const [Rev, setRev] = useState("");

	const [bookTitle, setBookTitle] = useState("");
	const [bookAuthor, setBookAuthor] = useState("");
	const [bookDesc, setBookDesc] = useState("");

	function starSystem(elem, val) {
		//for getting the value clicked in the star rating
		const star = elem.target.parentNode;

		//reset all stars
		for (let i = 0; i < star.parentNode.childNodes.length; i++) {
			let temp = star.parentNode.childNodes[i];
			temp.classList.remove("stuck-star");
		}

		star.classList.add("stuck-star");
		setRating(val);
		void elem.target.offsetWidth;
	}

	function submitReview(e) {
		e.preventDefault();
		const form = { Rev, Rating };
		console.log(form);
	}

	function submitBook(e) {
		e.preventDefault();
		const form = {
			name: bookTitle,
			author: bookAuthor,
			description: bookDesc,
			image: "lol.jepg",
			edition: "1st Edition",
		};
		console.log(form);
		callAPI(`${BASE_URL}/book`, form);
	}

	const callAPI = async (url, JSON) => {
		const token = userData.token;
		try {
			const fetchOptions = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON,
			};
			const response2 = await fetch(url, fetchOptions);
			const reply2 = response2.json();
			console.log(reply2);
			if (!response2.ok) {
				alert("Entry unsuccessful!");
			} else {
				alert("Entry Successful");
				window.location.reload();
			}
		} catch (e) {
			console.log(e);
			alert("Something went wrong!");
		}
	};

	return (
		<>
			<a
				className="libra-link"
				href={linkref}
				data-bs-toggle="modal"
				data-bs-config={{ backdrop: true }}
				data-bs-target={`#` + modalTarget}
			>
				<div className="libra">{btntext}</div>
			</a>

			<div
				class="modal fade w-100"
				id="reviewModal"
				tabindex="-1"
				aria-labelledby="reviewModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog d-flex justify-content-center align-items-center">
					<form
						class="modal-content"
						onSubmit={(e) => {
							submitReview(e);
						}}
					>
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="reviewModalLabel">
								Log and Review
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<div className="">
								<span className="modal-body-header">
									Note that reviewing the same book will overwrite the previous
									review
								</span>
							</div>
							<div className="d-flex row justify-content-center p-3">
								<span className="form-subheading col-12 p-0">Rating</span>
								<hr style={{ color: "aliceblue" }} className="" />
								<ol className="star-list col-md-8 col-9">
									<li
										className="star-member"
										onClick={function () {
											starSystem(event, 5);
										}}
									>
										<i class="fa-solid fa-star"></i>
									</li>
									<li
										className="star-member"
										onClick={function () {
											starSystem(event, 4);
										}}
									>
										<i class="fa-solid fa-star"></i>
									</li>
									<li
										className="star-member"
										onClick={function () {
											starSystem(event, 3);
										}}
									>
										<i class="fa-solid fa-star"></i>
									</li>
									<li
										className="star-member"
										onClick={function () {
											starSystem(event, 2);
										}}
									>
										<i class="fa-solid fa-star"></i>
									</li>
									<li
										className="star-member"
										onClick={function () {
											starSystem(event, 1);
										}}
									>
										<i class="fa-solid fa-star"></i>
									</li>
								</ol>
								{/* delete later */}
								<div
									className="d-flex align-items-start p-0 m-0 test fs-3 col"
									style={{ color: "brown" }}
								>
									{Rating}
								</div>

								<span className="form-subheading col-12 p-0">Review</span>
								<hr style={{ color: "aliceblue" }} className="" />
								<textarea
									className="form-control-sm w-100 m-2 p-1"
									rows="5"
									cols="50"
									name="reviewArea"
									onChange={(e) => setRev(e.target.value)}
									value={Rev}
									required
								></textarea>
							</div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary btn-clear"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" class="btn btn-primary btn-submit">
								Save changes
							</button>
						</div>
					</form>
				</div>
			</div>

			<div
				class="modal fade w-auto"
				id="publishModal"
				tabindex="-1"
				aria-labelledby="reviewModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<form
						class="modal-content"
						onSubmit={(e) => {
							submitBook(e);
						}}
					>
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="reviewModalLabel">
								Upload a Book
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<div className="">
								<span className="modal-body-header">
									Note that uploading the same book will overwrite the previous
									review
								</span>
							</div>
							<div className="d-flex row justify-content-center p-3">
								<span className="form-subheading col-12 p-0">Title</span>
								<hr style={{ color: "aliceblue" }} className="" />
								<input
									className="form-control-sm w-100 m-2 p-1"
									name="bookTitle"
									onChange={(e) => setBookTitle(e.target.value)}
									value={bookTitle}
									required
								></input>

								<span className="form-subheading col-12 p-0">Author Name</span>
								<hr style={{ color: "aliceblue" }} className="" />
								<input
									className="form-control-sm w-100 m-2 p-1"
									name="bookAuthor"
									onChange={(e) => setBookAuthor(e.target.value)}
									value={bookAuthor}
									required
								></input>

								<span className="form-subheading col-12 p-0">Description</span>
								<hr style={{ color: "aliceblue" }} className="" />
								<textarea
									className="form-control-sm w-100 m-2 p-1"
									rows="5"
									cols="50"
									name="bookDescription"
									onChange={(e) => setBookDesc(e.target.value)}
									value={bookDesc}
									required
								></textarea>
							</div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary btn-clear"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="submit" class="btn btn-primary btn-submit">
								Save changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default LibraButton;
