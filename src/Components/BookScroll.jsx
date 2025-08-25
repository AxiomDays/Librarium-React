import { useState, useEffect } from "react";
import "./BookScroll.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
//Book_1, Book_2, Book_3, Book_4
function BookScroll({ title = "Trending Books", Book_1 = ["Holberton"] }) {
	return (
		<>
			<div className="container">
				<div className="line">
					<span className="book-row-title">{title}</span>
					<hr style={{ color: "aliceblue" }} />
					<div className="book-row row">
						<div className="d-flex justify-content-md-center justify-content-around col-12">
							<div className="image-col col-sm-2 col-1">
								<a href="#">
									<img
										className="book-img col-12"
										src="../src/assets/holberton-logo.jpg"
										alt=""
										srcset=""
									/>
									<span className="icon-text col-12">{Book_1[0]}</span>
								</a>
							</div>
							<div className="image-col col-sm-2 col-1">
								<a href="#">
									<img
										className="book-img col-12"
										src="../src/assets/holberton-logo.jpg"
										alt=""
										srcset=""
									/>
									<span className="icon-text col-12">{Book_1[0]}</span>
								</a>
							</div>
							<div className="image-col col-sm-2 col-1">
								<a href="#">
									<img
										className="book-img col-12"
										src="../src/assets/holberton-logo.jpg"
										alt=""
										srcset=""
									/>
									<span className="icon-text col-12">{Book_1[0]}</span>
								</a>
							</div>
							<div className="image-col col-sm-2 col-1">
								<a href="#">
									<img
										className="book-img col-12"
										src="../src/assets/holberton-logo.jpg"
										alt=""
										srcset=""
									/>
									<span className="icon-text col-12">{Book_1[0]}</span>
								</a>
							</div>
						</div>
					</div>
					<hr style={{ color: "aliceblue" }} />
				</div>
			</div>
		</>
	);
}

export default BookScroll;
