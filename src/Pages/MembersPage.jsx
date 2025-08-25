import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./MembersPage.css";
import { useEffect, useState } from "react";

function MembersPage() {
	const BASE_URL = "https://ccdaniel.pythonanywhere.com//api/";

	const rows = [];
	const [error, setError] = useState("");
	const [source, setSource] = useState([]);
	const [members, setmembers] = useState([]);

	function membersJSON(input = [], membersVal) {
		const returnedArr = [];
		membersVal = membersVal.toLowerCase().split(" ");
		console.log(membersVal);
		for (let i = 0; i < input.length; i++) {
			let inputSet = input[i].username.toLowerCase().split(" ");
			let inputSetFirstName = input[i].firstname.toLowerCase().split(" ");
			const intersection = inputSet.filter((element) =>
				membersVal.includes(element)
			);
			const intersection2 = inputSetFirstName.filter((element) =>
				membersVal.includes(element)
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
				const response1 = await fetch(`${BASE_URL}/users/`);
				if (response1.status == 500) {
					window.location.reload();
				}
				const reply1 = await response1.json();
				if (members != "") {
					const reply2 = membersJSON(reply1, members);
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
	}, [members]);

	source.forEach((key) => {
		rows.push(
			<tr>
				<td className="text-align-center">{key.id}</td>
				<td>
					<a href={`/users/` + key.id} style={{ "text-decoration": "none" }}>
						{key.username}
					</a>
				</td>
				<td>{key.lastname}</td>
				<td>{key.firstname}</td>
				<td className="end-cell-body">{key.email}</td>
			</tr>
		);
	});

	return (
		<>
			<Header />
			<div className="container">
				<div className="members-bar row">
					<h1 className="members-header col-12 d-flex text-align-center justify-content-center">
						SEARCH BAR
					</h1>
					<input
						type="text"
						className="col-10 col-md-6"
						onChange={(e) => setmembers(e.target.value)}
						value={members}
					/>
				</div>
				<div className="members-table row">
					<table className="p-3">
						<thead>
							<tr>
								<th className="col-1 text-align-center">ID</th>
								<th className="col-1">Username</th>
								<th className="col-2">Last Name</th>
								<th className="col-2">First Name</th>
								<th className="col-3" id="end-cell-head">
									Email
								</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MembersPage;
