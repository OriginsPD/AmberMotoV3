import {
	accessHost,
	defaultRequest,
	rentalStatusProp,
} from "../../constants/ApiConfig";
import { useState } from "react";
import useToken from "../../components/hooks/useToken";

const RentalApi = () => {
	const { token } = useToken();

	const [rentalStatus, setRentalStatus] = useState<rentalStatusProp[]>(
		{} as rentalStatusProp[]
	);

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

		if (queryResponse.status === 200) {
			setRentalStatus(queryResponse.body);
			// console.log(queryResponse.body);
		} else {
			// console.log("failed");
		}
	};

	return { statusIndex, rentalStatus };
};

export default RentalApi;
