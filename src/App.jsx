import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Main from "./Pages/Main.jsx";
import Profile from "./Pages/Profile.jsx";
import Auth from "./Pages/Auth.jsx";
import Book from "./Pages/Book.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import MembersPage from "./Pages/MembersPage.jsx";
import UserContext from "../UserContext.jsx";
import ProtectedRoutes from "./Pages/utils/ProtectedRoutes/ProtectedRoutes.jsx";
import { getItem, setItem } from "./Pages/utils/localStorage.js";

function App() {
	const [userData, setUserData] = useState(() => {
		const item = getItem("authBody");
		return item || null;
	});

	useEffect(() => {
		setItem("authBody", userData);
	}, [userData]);

	return (
		<UserContext.Provider value={[userData, setUserData]}>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="/auth" element={<Auth signup={false} />} />
				<Route path="/auth/signup" element={<Auth signup={false} />} />
				<Route path="/auth/login" element={<Auth signup={true} />} />
				<Route path="/book/:id" element={<Book />} />
				<Route path="/book" element={<SearchPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/member" element={<MembersPage />} />
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
