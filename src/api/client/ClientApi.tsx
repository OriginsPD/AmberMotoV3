import { useState } from "react";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	BikeDetailProp,
} from "../../constants/ApiConfig";
const ClientApi = () => {
	const { token } = useToken();

	const [client, setClient] = useState([]);
	const [current, setCurrent] = useState([]);
	const [penalty, setPenalty] = useState([]);

	const [queryBike, setQueryBike] = useState<BikeDetailProp>(
		{} as BikeDetailProp
	);

	const pastClientIndex = async () => {
		const response = await fetch(`${accessHost}/client`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
			},
		});

		const queryResponse = await response.json();
		if (queryResponse.status === 200) {
			setClient(queryResponse.past);
			setCurrent(queryResponse.current);
			setPenalty(queryResponse.penalty);
		} else {
			console.log("failed");
		}

		// console.log(queryResponse);
	};

	const clientFind = async (id: number) => {
		const response = await fetch(`${accessHost}/client/${id}`, {
			...defaultRequest,
			method: "GET",
			headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		const queryResponse = await response.json();

		if (queryResponse.status === 200) {
			setQueryBike(queryResponse.body);
		} else {
			console.log("failed");
		}

		// console.log(queryResponse.body);
	};

	return { pastClientIndex, clientFind, queryBike, client, current, penalty };
};

export default ClientApi;
