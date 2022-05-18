import { useEffect, useState } from "react";

const CheckAuth = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const isAuthState = localStorage.getItem("isAuth");

	useEffect(() => {
		let authState = isAuthState ? JSON.parse(isAuthState) : false;
		setIsAuth(authState);
	}, [isAuthState]);

	console.log(isAuth);

	return { isAuth };
};

export default CheckAuth;
