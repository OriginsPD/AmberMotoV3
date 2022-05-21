import { SetStateAction, useEffect, useState } from "react";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	EmployeeProps,
} from "../../constants/ApiConfig";

type UnActiveUserProp = {
	id: number;
	username: number;
	email: number;
	status: number;
	employee: [
		{
			id: number;
			user_id: number;
			active_flg: boolean;
		}
	];
};

const EmployeeApi = () => {
	const { token } = useToken();

	const [isLoaded, setIsLoad] = useState(false);

	const [employee, setEmployee] = useState<EmployeeProps[]>(
		{} as EmployeeProps[]
	);
	const [employeePending, setEmployeePending] = useState<EmployeeProps[]>(
		{} as EmployeeProps[]
	);

	const [unActiveEmployee, setUnActiveEmployee] = useState<UnActiveUserProp[]>(
		{} as UnActiveUserProp[]
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
				? setEmployeeDetails(queryResponse)
				: console.log(response.status);

			return queryResponse;
		};
		fetchEmployee();
	}, [token]);

	const setEmployeeDetails = (data: {
		query: SetStateAction<EmployeeProps[]>;
		pending: SetStateAction<EmployeeProps[]>;
		unActive: SetStateAction<UnActiveUserProp[]>;
	}) => {
		setEmployee(data.query);
		setEmployeePending(data.pending);
		setUnActiveEmployee(data.unActive);
		setIsLoad(true);
	};

	const EmployeeUpdate = async (ids: any) => {
		var urlencoded = new URLSearchParams();
		urlencoded.append("Array", ids);
		const response = await fetch(`${accessHost}/employeeStatus`, {
			...defaultRequest,
			method: "POST",
			headers: {
				"Content-type": "application/x-www-form-urlencoded",
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: urlencoded,
		});
	};

	return { employee, isLoaded, employeePending, EmployeeUpdate };
};

export default EmployeeApi;

export const EmployeeList = () => {
	const { employee, isLoaded, employeePending } = EmployeeApi();
	return { employee, isLoaded, employeePending };
};
