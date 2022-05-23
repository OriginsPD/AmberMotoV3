import { SetStateAction, useState } from "react";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	BikeDetailProp,
	RentalState,
} from "../../constants/ApiConfig";
const ClientApi = () => {
	const { token } = useToken();

	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const [client, setClient] = useState<RentalState[]>([]);
	const [current, setCurrent] = useState<RentalState[]>([]);
	const [penalty, setPenalty] = useState<RentalState[]>([]);

	const [queryBike, setQueryBike] = useState<BikeDetailProp>(
		{} as BikeDetailProp
	);

	const setStateValues = (data: {
		past: SetStateAction<RentalState[]>;
		current: SetStateAction<RentalState[]>;
		penalty: SetStateAction<RentalState[]>;
	}) => {
		setClient(data.past);
		setCurrent(data.current);
		setPenalty(data.penalty);
		setIsLoaded(true);
	};

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
		if (response.status === 200) {
			setStateValues(queryResponse);
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

		if (response.status === 200) {
			setQueryBike(queryResponse.body);
		} else {
			console.log("failed");
		}

		// console.log(queryResponse.body);
	};

	return {
		pastClientIndex,
		clientFind,
		queryBike,
		client,
		current,
		penalty,
		isLoaded,
	};
};

export default ClientApi;
