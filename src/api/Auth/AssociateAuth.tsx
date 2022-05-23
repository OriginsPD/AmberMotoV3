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

	const checkRoleStatus = async (role: number, data: any) => {
		authorize(data);

		setTimeout(() => {
			// console.log("Missed");
			role
				? role == 1
					? navigate("/", { replace: true })
					: role == 2
					? navigate("/Associate", { replace: true })
					: navigate("/Admin", { replace: true })
				: console.log("Missed");
		}, 500);
	};

	const registerAssociate = async () => {
		const response = await fetch(`${accessHost}/register`, {
			...defaultRequest,
			method: "POST",
			body: JSON.stringify(state),
		});

		const queryResponse = await response.json();
		response.status === 200
			? checkRoleStatus(queryResponse.role, queryResponse.body)
			: console.log("Missed");
	};

	const loginAssociate = async () => {
		const response = await fetch(`${accessHost}/login`, {
			...defaultRequest,
			method: "POST",
			body: JSON.stringify(state),
		});

		const queryResponse = await response.json();
		response.status === 200
			? checkRoleStatus(queryResponse.role, queryResponse.body)
			: console.log("Missed");
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

		response.status === 200 ? unAuthorize() : console.log("logout failed");

		navigate("/", { replace: true });
	};
	return { registerAssociate, loginAssociate, logout };
};

export default AssociateAuth;
