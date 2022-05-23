import React from "react";

type AuthState = {
	username: string;
	email: string;
	status: boolean;
	created_at?: string;
	personal_detail: {
		user_id: number;
		address: string;
		phone_number: number;
	};
	role_user: {
		role_id: number;
	};
} | null;

const useUserInfo = () => {
	const authInfoState: any = localStorage.getItem("authInfo");
	const authInfo: AuthState = JSON.parse(authInfoState) ?? null;

	// console.log(authInfo);

	return { authInfo };
};

export default useUserInfo;
