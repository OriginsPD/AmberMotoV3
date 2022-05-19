import { useEffect, useState } from "react";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	EmployeeProps,
} from "../../constants/ApiConfig";

const EmployeeApi = () => {
	const { token } = useToken();
	const [employee, setEmployee] = useState<EmployeeProps[]>(
		{} as EmployeeProps[]
	);

	useEffect(() => {
		const fetchEmployee = async () => {
			const response = await fetch(`${accessHost}/employee`, {
				...defaultRequest,
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
				},
			});

			const queryResponse = await response.json();

			response.status == 200
				? setEmployee(queryResponse.query)
				: console.log(response.status);

			return queryResponse;
		};
		fetchEmployee();
	}, [token]);

	return { employee };
};

export default EmployeeApi;

export const EmployeeList = () => {
	const { employee } = EmployeeApi();
	return { employee };
};
