import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserInfo from "../components/hooks/useUserInfo";

const CheckPermission = () => {
	const location = useLocation();
	const { authInfo } = useUserInfo();

	const isAuthState = localStorage.getItem("isAuth");
	const isAuth = isAuthState ? JSON.parse(isAuthState) : null;

    
	return !isAuth ? (
		<Outlet />
	) : authInfo?.role_user.role_id == 1 ? (
		<Outlet />
	) : authInfo?.role_user.role_id == 2 ? (
		<Navigate to="/Associate" state={{ from: location }} replace />
	) : (
		<Navigate to="/Admin" state={{ from: location }} replace />
	);
};

export default CheckPermission;
