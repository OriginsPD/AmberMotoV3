import { useNavigate } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";
import useForms from "../../components/hooks/useForms";
import useToken from "../../components/hooks/useToken";

import AlertToast from "../../components/toast/AlertToast";

import { accessHost, defaultRequest } from "../../constants/ApiConfig";

const AssociateAuth = () => {
	const navigate = useNavigate();
	const { authorize, unAuthorize } = useAuth();
	const { token } = useToken();
	const { state } = useForms();

	const { AuthSuccess, AuthFailed, AuthLogout } = AlertToast();

	const checkRoleStatus = async (role: number, data: any) => {
		authorize(data);

		setTimeout(() => {
			// console.log(queryResponse.message);
			role
				? role == 1
					? navigate("/", { replace: true })
					: role == 2
					? navigate("/Associate", { replace: true })
					: navigate("/Admin", { replace: true })
				: console.log(data.message);

			AuthSuccess();
		}, 500);
	};

	const registerAssociate = async () => {
		const response = await fetch(`${accessHost}/register`, {
			...defaultRequest,
			method: "POST",
			body: JSON.stringify(state),
		});

		const queryResponse = await response.json();

		queryResponse.body.status === 200
			? checkRoleStatus(queryResponse.role, queryResponse.body)
			: AuthFailed(queryResponse.body.message);
	};

	const loginAssociate = async () => {
		const response = await fetch(`${accessHost}/login`, {
			...defaultRequest,
			method: "POST",
			body: JSON.stringify(state),
		});

		const queryResponse = await response.json();

		queryResponse.body.status === 200
			? checkRoleStatus(queryResponse.role, queryResponse.body)
			: AuthFailed(queryResponse.body.message);
	};

	const logout = async () => {
		const response = await fetch(`${accessHost}/logout`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
			},
		});

		response.status === 200 ? unAuthorize() : AuthFailed("logout failed");

		navigate("/", { replace: true });
	};
	return { registerAssociate, loginAssociate, logout };
};

export default AssociateAuth;
