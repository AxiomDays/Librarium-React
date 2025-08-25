import { useState, useEffect, useContext } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import UserContext from "../../UserContext";
import { setItem } from "../Pages/utils/localStorage";

function Header() {
	const [userData, setUserData] = useContext(UserContext);
	return (
		<>
			<nav className="main-nav">
				<div className="container-fluid d-flex justify-content-center">
					<div className="nav-row row col-12 col-md-10">
						<div className="col-md-4 col">
							<a href="/">
								<div className="logo">
									<i
										class="fa-solid fa-book"
										style={{ color: "#99311fff", padding: "0 1.5dvw" }}
									></i>
									<span className="logo-text playfair">LIBRARIUM</span>
								</div>
							</a>
						</div>
						<div className="col-lg-6 col d-none d-md-block">
							<div className="content">
								<ul className="navg-list row bebas fs-4">
									{!userData ? (
										<a className="col" href="/auth/login">
											<li className="sign-in ps-3 pe-3">SIGN-IN</li>
										</a>
									) : (
										<a className="col" href="/profile">
											<li>PROFILE</li>
										</a>
									)}
									<a className="col" href="/book">
										<li>BOOKS</li>
									</a>
									<a className="col" href="/member">
										<li>MEMBERS</li>
									</a>
									<a className="col" href="/about">
										<li>ABOUT</li>
									</a>
									{userData ? (
										<a
											className="col"
											onClick={() => {
												setItem("authBody", null);
												window.location.assign("/");
												console.log("logged out");
											}}
										>
											<li>LOG OUT</li>
										</a>
									) : (
										""
									)}
								</ul>
							</div>
						</div>
						<button
							class=" drop-btn col-2 d-md-none d-block"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
							aria-label="Toggle navigation"
						>
							<img
								src="../src/assets/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
								alt=""
								srcset=""
							/>
						</button>
						<div
							class="offcanvas offcanvas-end text-bg-dark"
							tabindex="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div class="offcanvas-header ">
								<h5 class="offcanvas-title" id="offcanvasNavbarLabel">
									Navigation Menu
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
							</div>
							<div class="offcanvas-body">
								<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
									{!userData ? (
										<li class="nav-item side-li">
											<a
												class="nav-link side-link active"
												aria-current="page"
												href="/auth/login"
											>
												SIGN IN
											</a>
											<hr style={{ color: "aliceblue" }} />
										</li>
									) : (
										<li class="nav-item side-li">
											<a
												class="nav-link side-link active"
												aria-current="page"
												href="/profile"
											>
												PROFILE
											</a>
											<hr style={{ color: "aliceblue" }} />
										</li>
									)}

									<li class="nav-item">
										<a class="nav-link side-link" href="#">
											BOOKS
										</a>
										<hr style={{ color: "aliceblue" }} />
									</li>
									<li class="nav-item">
										<a class="nav-link side-link" href="/profile">
											PROFILE
										</a>
										<hr style={{ color: "aliceblue" }} />
									</li>
									<li class="nav-item">
										<a class="nav-link side-link" href="/about">
											ABOUT
										</a>
										<hr style={{ color: "aliceblue" }} />
									</li>
									{userData ? (
										<li class="nav-item">
											<a
												class="nav-link side-link"
												onClick={() => {
													setItem("authBody", null);
													window.location.assign("/");
												}}
											>
												LOG OUT
											</a>
											<hr style={{ color: "aliceblue" }} />
										</li>
									) : (
										""
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
