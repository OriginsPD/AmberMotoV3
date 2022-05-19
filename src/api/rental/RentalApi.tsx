import {
	accessHost,
	defaultRequest,
	rentalStatusProp,
	RentalState,
} from "../../constants/ApiConfig";
import { SetStateAction, useState } from "react";
import useToken from "../../components/hooks/useToken";

const RentalApi = () => {
	const { token } = useToken();

	const [rentalStatus, setRentalStatus] = useState<rentalStatusProp[]>(
		{} as rentalStatusProp[]
	);

	const [rentalList, setRentalList] = useState<RentalState[]>([]);

	const [isLoaded, setIsLoad] = useState<boolean>(false);

	const getResponseStatus = async (
		data: SetStateAction<rentalStatusProp[]>
	) => {
		setRentalStatus(data);
		setIsLoad(true);
	};

	const getResponseList = async (data: SetStateAction<RentalState[]>) => {
		setRentalList(data);
		setIsLoad(true);
	};

	const statusIndex = async () => {
		const response = await fetch(`${accessHost}/bikeStatus`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const queryResponse = await response.json();

		response.status === 200
			? getResponseStatus(queryResponse.body)
			: console.log("Missed");
	};

	const rentalIndex = async () => {
		const response = await fetch(`${accessHost}/rental`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const queryResponse = await response.json();

		response.status == 200
			? getResponseList(queryResponse.body)
			: console.log("missed");
	};

	return { statusIndex, rentalIndex, rentalStatus, rentalList, isLoaded };
};

export default RentalApi;
