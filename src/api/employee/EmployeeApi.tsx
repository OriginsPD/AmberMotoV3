import { SetStateAction, useEffect, useState } from "react";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	EmployeeProps,
	InActiveUserProp,
} from "../../constants/ApiConfig";

const EmployeeApi = () => {
	const { token } = useToken();

	const [isLoaded, setIsLoad] = useState(false);

	const [refresh, setRefresh] = useState(0);

	const [employeeInfo, setEmployeeInfo] = useState<EmployeeProps>(
		{} as EmployeeProps
	);

	const [employee, setEmployee] = useState<EmployeeProps[]>(
		{} as EmployeeProps[]
	);
	const [employeePending, setEmployeePending] = useState<EmployeeProps[]>(
		{} as EmployeeProps[]
	);

	const [inActiveEmployee, setInActiveEmployee] = useState<InActiveUserProp[]>(
		{} as InActiveUserProp[]
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
	}, [token, refresh]);

	// const indexEmployee = async () => {
	// 	const response = await fetch(`${accessHost}/employee`, {
	// 		...defaultRequest,
	// 		method: "GET",
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 			Accept: "application/json",
	// 		},
	// 	});

	// 	const queryResponse = await response.json();

	// 	response.status == 200
	// 		? setEmployeeDetails(queryResponse)
	// 		: console.log(response.status);
	// };

	const setEmployeeDetails = (data: {
		query: SetStateAction<EmployeeProps[]>;
		pending: SetStateAction<EmployeeProps[]>;
		unActive: SetStateAction<InActiveUserProp[]>;
	}) => {
		setEmployee(data.query);
		setEmployeePending(data.pending);
		setInActiveEmployee(data.unActive);
		setIsLoad(true);
	};

	const EmployeeShow = async (id: number) => {
		const response = await fetch(`${accessHost}/employee/${id}`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const queryResponse = await response.json();

		if (response.status == 200) {
			setIsLoad(true);
			setEmployeeInfo(queryResponse.body);
		} else {
			console.log("missed");
		}
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

		response.status == 200
			? setRefresh((pre) => pre + 2)
			: console.log("missed");
	};

	return {
		// States
		isLoaded,
		employee,
		employeeInfo,

		// Functions
		EmployeeShow,
		setRefresh,
		//indexEmployee,
		EmployeeUpdate,
		employeePending,
		inActiveEmployee,
	};
};

export default EmployeeApi;

export const RefreshEmployeeList = () => {
	const { setRefresh } = EmployeeApi();
	return { setRefresh };
};

export const EmployeeList = () => {
	const {
		employee,
		isLoaded,
		inActiveEmployee,
		//indexEmployee,
		employeePending,
	} = EmployeeApi();
	return {
		employee,
		isLoaded,
		//indexEmployee,
		inActiveEmployee,
		employeePending,
	};
};

export const SingleEmployeeInfo = () => {
	const { EmployeeShow, employeeInfo } = EmployeeApi();
	return { EmployeeShow, employeeInfo };
};
