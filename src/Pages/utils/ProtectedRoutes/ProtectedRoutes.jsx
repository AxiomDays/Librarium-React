import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../../../../UserContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
	const [userData, setUserData] = useContext(UserContext);
	return userData ? <Outlet /> : <Navigate to="auth/login" />;
};

export default ProtectedRoutes;
