import { useNavigate } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";
import useForms from "../../components/hooks/useForms";
import useToken from "../../components/hooks/useToken";
import { accessHost, defaultRequest } from "../../constants/ApiConfig";

const AssociateAuth = () => {
	const navigate = useNavigate();
	const { authorize, unAuthorize } = useAuth();
	const { token } = useToken();
	const { state } = useForms();

	const registerAssociate = async () => {
		const response = await fetch(`${accessHost}/register`, {
			...defaultRequest,
			method: "POST",
			body: JSON.stringify(state),
		});

		const queryResponse = await response.json();
		queryResponse?.status === 200
			? authorize(queryResponse?.body)
			: console.log("Missed");

		navigate("/Associate", { replace: true });
	};

	const loginAssociate = async () => {
		const response = await fetch(`${accessHost}/login`, {
			...defaultRequest,
			method: "POST",
			body: JSON.stringify(state),
		});

		const queryResponse = await response.json();
		queryResponse?.status === 200
			? authorize(queryResponse?.body)
			: console.log("Missed");

		navigate("/Associate", { replace: true });
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

		const queryResponse = await response.json();

		queryResponse.status === 200 ? unAuthorize() : console.log("logout failed");

		navigate("/", { replace: true });

		// console.log(queryResponse);
	};
	return { registerAssociate, loginAssociate, logout };
};

export default AssociateAuth;
