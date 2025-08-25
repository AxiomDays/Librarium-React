import "./SearchPage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LibraButton from "../Components/LibraButton";
import { useEffect, useState } from "react";

function SearchPage() {
	const BASE_URL = "https://ccdaniel.pythonanywhere.com//api";

	const rows = [];
	const [error, setError] = useState("");
	const [source, setSource] = useState([]);
	const [search, setSearch] = useState([]);

	function searchJSON(input = [], searchVal) {
		const returnedArr = [];
		searchVal = searchVal.toLowerCase().split(" ");
		console.log(searchVal);
		for (let i = 0; i < input.length; i++) {
			let inputSet = input[i].name.toLowerCase().split(" ");
			let inputSetAuthor = input[i].author.toLowerCase().split(" ");
			const intersection = inputSet.filter((element) =>
				searchVal.includes(element)
			);
			const intersection2 = inputSetAuthor.filter((element) =>
				searchVal.includes(element)
			);
			console.log(`intersec is ${intersection} or ${intersection2}`);
			if (intersection != "" || intersection2 != "") {
				returnedArr.push(input[i]);
			}
		}
		console.log(returnedArr);
		return returnedArr;
	}

	useEffect(() => {
		const fetchBook = async () => {
			try {
				setSource([]);
				const response1 = await fetch(`${BASE_URL}/book`);
				if (response1.status == 500) {
					window.location.reload();
				}
				const reply1 = await response1.json();
				if (search != "") {
					const reply2 = searchJSON(reply1, search);
					setSource(reply2);
					console.log(reply2);
				} else {
					setSource(reply1);
					console.log(reply1);
				}
			} catch (e) {
				console.log(e);
				setError(e);
				alert("An error has occured while fetching.");
			}
		};
		fetchBook();
	}, [search]);

	source.forEach((key) => {
		rows.push(
			<tr>
				<td className="text-align-center">{key.id}</td>
				<td>{key.author}</td>
				<td>
					<a href={`/book/` + key.id} style={{ "text-decoration": "none" }}>
						{key.name}
					</a>
				</td>
				<td className="end-cell-body">{key.reviews.length}</td>
			</tr>
		);
	});
    
	return (
		<>
			<Header />
			<div className="container">
				<div className="search-bar row">
                    <h1 className="search-header col-12 d-flex text-align-center justify-content-center">SEARCH BAR</h1>
					<input
						type="text"
						className="col-12 col-md-6"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</div>
				<div className="search-table row">
					<table className="p-3 col">
						<thead>
							<tr>
								<th className="col-1 text-align-center">ID</th>
								<th className="col-3">Author</th>
								<th className="col">Name</th>
								<th className="col-1" id="end-cell-head">
									Reviews
								</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
				</div>
				<LibraButton btntext="Add Book" modalTarget="publishModal" />
				<button
					className="reload"
					onClick={() => {
						fetchBook();
					}}
				>
					Reload?
				</button>
			</div>
			<Footer />
		</>
	);
}

export default SearchPage;
