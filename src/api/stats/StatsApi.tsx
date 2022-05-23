import { SetStateAction, useEffect, useState } from "react";
import useToken from "../../components/hooks/useToken";
import { accessHost, defaultRequest } from "../../constants/ApiConfig";

const StatsApi = () => {
	const { token } = useToken();

	const [userCount, setUserCount] = useState<number>(0);
	const [clientCount, setClientCount] = useState<number>(0);
	const [associateCount, setAssociateCount] = useState<number>(0);
	const [RentalCount, setRentalCount] = useState<number>(0);

	const setResponseData = (data: {
		userCount: SetStateAction<number>;
		query: SetStateAction<number>;
		queryAssociate: SetStateAction<number>;
		queryRental: SetStateAction<number>;
	}) => {
		setUserCount(data.userCount);
		setClientCount(data.query);
		setAssociateCount(data.queryAssociate);
		setRentalCount(data.queryRental);
	};

	useEffect(() => {
		const fetchCount = async () => {
			const response = await fetch(`${accessHost}/stats`, {
				...defaultRequest,
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
				},
			});

			const queryResponse = await response.json();

			response.status === 200
				? setResponseData(queryResponse)
				: console.log("missed");

			return queryResponse;
		};
		fetchCount();
	}, [token]);

	return { userCount, clientCount, associateCount, RentalCount };
};

export default StatsApi;

export const calculateAvg = () => {
	const { RentalCount, associateCount, clientCount, userCount } = StatsApi();

	return { RentalCount, associateCount, clientCount, userCount };
};
