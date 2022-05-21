import { Fragment, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserInfo from "../components/hooks/useUserInfo";

enum ROLES {
	ADMIN = 3,
	CUSTOMER = 2,
}

type AllowedRoleProps = {
	role: ROLES;
};

const AccessPermission = ({ role }: AllowedRoleProps) => {
	const location = useLocation();
	const { authInfo } = useUserInfo();

	const isAuthState = localStorage.getItem("isAuth");
	const isAuth = isAuthState ? JSON.parse(isAuthState) : null;

	// console.log(isAuth);

	return isAuth ? (
		authInfo?.role_user.role_id == role ? (
			<Outlet />
		) : (
			<Navigate to="/" state={{ from: location }} replace />
		)
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
};

export default AccessPermission;
