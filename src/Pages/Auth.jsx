import { useState, useEffect, useContext } from "react";
import "./Auth.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserContext from "../../UserContext";

function Auth({ signup = false }) {
	const BASE_URL = "https://ccdaniel.pythonanywhere.com/api";
	const [canLogIn, setPage] = useState(signup);
	const [username, setUser] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [gender, setGender] = useState("male");
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");
	const [confirmPassword, setConfirmPass] = useState("");
	const [error, setError] = useState("");
	const [authError, setAuthError] = useState("");
	const [avater, setAvater] = useState("img.jpg");
	const [id, setId] = useState(100);

	const [userData, setUserData] = useContext(UserContext);

	const callAPI = async (JForm, kind) => {
		setError("");
		setAuthError("");
		try {
			const fetchOptions = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "*/*",
				},
				body: JSON.stringify(JForm),
			};
			const response3 = await fetch(`${BASE_URL}/${kind}`, fetchOptions);
			if (response3.status == 401) {
				setAuthError("Incorrect email/password");
				setError("Invalid credentials. Try again");
			}
			if (response3.status == 500) {
				setAuthError("Internal Error. Try again.");
				setError("Internal Error. Try again.");
			}
			if (!response3.ok) {
				throw new Error(
					`Authentication failed with status: ${response3.status} (${response3.statusText})`
				);
			}
			const data = await response3.json();
			console.log(data);

			if (kind == "login") {
				const jwt = data.access_token;

				const authBody = { token: jwt, logged_in: data.logged_in };
				localStorage.setItem("authBody", authBody);
				setUserData(authBody);
			}
			window.location.assign("/profile");
		} catch (e) {
			console.log(e);
		}
	};

	async function handleLogin(e) {
		e.preventDefault();
		const logForm = { email, password };
		console.log(logForm);
		callAPI(logForm, "login");
	}

	function handleSignup(e) {
		setError("");

		e.preventDefault();
		let signForm = {
			username: username,
			firstname: firstname,
			lastname: lastname,
			gender: gender,
			email: email,
			password: password,
			avatar: avater,
		};
		if (password != confirmPassword) {
			setError("Password does not match confirm!");
			return 0;
		}
		console.log(signForm);
		callAPI(signForm, "signup");
	}

	function getFormData(object) {
		const formData = new FormData();
		Object.keys(object).forEach((key) => formData.append(key, object[key]));
		return formData;
	}

	return (
		<>
			<Header />
			<div className="container">
				<div className="auth-row row justify-content-center">
					<div className="sign-up col-lg-4 col-md-8 col-12 d-flex p-3 justify-content-center align-items-center">
						{canLogIn ? (
							<>
								<div className="form-title justify-content-center fs-2 pb-3 w-100 col">
									LOG IN
								</div>

								<form
									className="main-form row"
									onSubmit={(e) => {
										handleLogin(e);
									}}
								>
									<div class="mb-3 col-12">
										<label for="Email" class="form-label">
											Email
										</label>
										<input
											type="email"
											class="form-control"
											id="email"
											onChange={(e) => setEmail(e.target.value)}
											value={email}
											required
										></input>
									</div>

									<div class="mb-3 col-12">
										<label for="Password" class="form-label">
											Password
										</label>
										<input
											type="password"
											class="form-control"
											id="Password"
											onChange={(e) => setPass(e.target.value)}
											value={password}
											required
										></input>
										<div id="emailHelp" class="form-text warning">
											{authError}
										</div>
									</div>
									<div className="btn-row row">
										<div className="btn-btn col-12">
											<button class="btn btn-primary " type="submit">
												Submit
											</button>
										</div>
										<div className="switch col-12">
											<span
												className="col-4"
												onClick={() => {
													setPage(false);
												}}
											>
												Sign-Up
											</span>
											<svg
												className="svg-box col-4"
												xmlns="http://www.w3.org/2000/svg"
											>
												<a href="#">
													<circle
														onClick={() => {
															setPage(false);
														}}
														className="left-circle"
														cx="30%"
														cy="50%"
														fill={canLogIn ? "white" : "lightblue"}
													/>
												</a>
												<a href="#">
													<circle
														onClick={() => {
															setPage(true);
														}}
														className="right-circle"
														cx="70%"
														cy="50%"
														fill={canLogIn ? "lightblue" : "white"}
													/>
												</a>
											</svg>
											<span
												className="col-4"
												onClick={() => {
													setPage(true);
												}}
											>
												Login
											</span>
										</div>
									</div>
								</form>
							</>
						) : (
							<>
								<div className="form-title justify-content-center fs-2 pb-3 w-100 col">
									CREATE YOUR ACCOUNT
								</div>
								<form
									className="main-form row"
									onSubmit={(e) => {
										handleSignup(e);
									}}
								>
									<div class="mb-3 col-6">
										<label for="firstName" class="form-label">
											First Name
										</label>
										<input
											type="username"
											class="form-control"
											id="firstName"
											onChange={(e) => setFirstName(e.target.value)}
											value={firstname}
											required
										></input>
									</div>
									<div class="mb-3 col-6">
										<label for="lastName" class="form-label">
											Last Name
										</label>
										<input
											type="username"
											class="form-control"
											id="lastName"
											onChange={(e) => setLastName(e.target.value)}
											value={lastname}
											required
										></input>
									</div>
									<div class="mb-3">
										<label for="Username" class="form-label">
											Username
										</label>
										<input
											type="username"
											class="form-control"
											id="Username"
											onChange={(e) => setUser(e.target.value)}
											value={username}
											required
										></input>
									</div>
									<div class="mb-3">
										<label for="Email" class="form-label">
											Email address
										</label>
										<input
											type="email"
											class="form-control"
											id="Email"
											aria-describedby="emailHelp"
											onChange={(e) => setEmail(e.target.value)}
											value={email}
											required
										></input>
									</div>

									<div class="mb-3 col-6">
										<label for="Password" class="form-label">
											Password
										</label>
										<input
											type="password"
											class="form-control"
											id="Password"
											onChange={(e) => setPass(e.target.value)}
											value={password}
											required
										></input>
									</div>
									<div class="mb-3 col-6">
										<label for="ConfirmPassword" class="form-label">
											Confirm Password
										</label>
										<input
											type="password"
											class="form-control"
											id="ConfirmPassword"
											onChange={(e) => setConfirmPass(e.target.value)}
											value={confirmPassword}
											required
										></input>
										<div id="emailHelp" class="form-text warning">
											{error}
										</div>
									</div>

									<div className="btn-row row col-12">
										<div className="btn-btn ">
											<button class="btn btn-primary" type="submit">
												Submit
											</button>
										</div>
										<div className="switch col-12">
											<span
												className="col-4"
												onClick={() => {
													setPage(false);
												}}
											>
												Sign-Up
											</span>
											<svg
												className="svg-box col-4"
												xmlns="http://www.w3.org/2000/svg"
											>
												<a href="#">
													<circle
														onClick={() => {
															setPage(false);
														}}
														className="left-circle"
														cx="30%"
														cy="50%"
														fill={canLogIn ? "white" : "lightblue"}
													/>
												</a>
												<a href="#">
													<circle
														onClick={() => {
															setPage(true);
														}}
														className="right-circle"
														cx="70%"
														cy="50%"
														fill={canLogIn ? "lightblue" : "white"}
													/>
												</a>
											</svg>
											<span
												className="col-4"
												onClick={() => {
													setPage(true);
												}}
											>
												Login
											</span>
										</div>
									</div>
								</form>
							</>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Auth;
