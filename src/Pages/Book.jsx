import { useState, useEffect } from "react";
import "./Book.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import BookScroll from "../Components/BookScroll";
import Header from "../Components/Header";
import Review from "../Components/Review";
import TitledTextBox from "../Components/TitledTextBox";
import LibraButton from "../Components/LibraButton";
import ReviewBox from "../Components/ReviewBox";
import { useParams } from "react-router-dom";

function Book() {
	const BASE_URL = "https://ccdaniel.pythonanywhere.com//api/book";
	const [source, setSource] = useState([]);
	const [reviewArr, setReviewArr] = useState([]);
	const { id } = useParams();
	let bookReviews = [];

	useEffect(() => {
		const fetchBookPage = async () => {
			try {
				const response1 = await fetch(`${BASE_URL}/${id}`);
				if (response1.status == 500) {
					window.location.reload();
				}
				const resp = await response1.json();
				const response2 = await fetch(`${BASE_URL}/${id}/review/`);
				const resp2 = await response2.json();
				setSource(resp);
				setReviewArr(resp2);

				if (!response1.ok) {
					throw new Error(`Response Status: ${response1.status}`);
				}
			} catch (e) {
				console.log(e.message);
				alert(e.message);
			}
		};
		fetchBookPage();
	}, [id]);

	const book = source;

	reviewArr.forEach((key) => {
		bookReviews.push(
			<Review stars={key.rating} date={key.timestamp} content={key.review} />
		);
	});

	console.log(book);
	console.log(reviewArr);
	console.log(bookReviews);

	return (
		<>
			<Header />
			<div className="container-fluid d-flex justify-content-center">
				<div className="book-frame row col-12 col-lg-10">
					<div className="book-body ">
						<div className="title-row row">
							<div className="over-image-box col-lg-3 col-md-5 col-12">
								<div className="image-box">
									<div className="row">
										<div className="col-12 over-book-img">
											<img
												className="book-img"
												src="../src/assets/holberton-logo.jpg"
												alt=""
												srcset=""
											/>
										</div>
										<div className="col-12">
											<LibraButton modalTarget="reviewModal" />
										</div>
									</div>
								</div>
							</div>
							<div className="info-col col-12 col-md-7 col-lg-9 text-md-start text-center">
								<p className="title-row-header">{book.name}</p>
								<br className="d-lg-none d-block " />
								<p className="title-row-author">Written by: {book.author}</p>
								<p className="title-row-filler">
									Released: 9th September, 2026
								</p>
								<p className="title-row-filler">
									Genres: Action, Romance etc...
								</p>
							</div>
						</div>
						<TitledTextBox title="Description" context={book.description} />
						<BookScroll title="Also in Series" />
						<ReviewBox title="User Reviews" reviews={bookReviews} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Book;
