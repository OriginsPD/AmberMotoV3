import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckAuth = () => {
	let authInfoString: string | null = "";

	useEffect(() => {
		authInfoString = localStorage.getItem("authInfo");
	}, []);

	let authInfo: any = authInfoString ? JSON.parse(authInfoString) : null;

	//console.log(authInfo?.role_user.role_id);

	return Object.keys(authInfo).length > 0 ? (
		authInfo?.role_user.role_id == 2 ? (
			<Outlet />
		) : (
			<Outlet />
		)
	) : (
		<Navigate to="/" />
	);
};

export default CheckAuth;
