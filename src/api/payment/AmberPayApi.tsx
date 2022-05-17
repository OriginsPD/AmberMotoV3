import { useState } from "react";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	LogState,
} from "../../constants/ApiConfig";

const AmberPayApi = () => {
	const { token } = useToken();
	const [amount, setAmount] = useState<number>(0);
	const [logInfo, setLogInfo] = useState<LogState[]>({} as LogState[]);

	const index = async () => {
		const response = await fetch(`${accessHost}/amberPay`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
			},
		});

		const queryResponse = await response.json();

		if (queryResponse.status === 200) {
			setAmount(queryResponse.query);
			setLogInfo(queryResponse.body);
			// console.log("Success");
		} else {
			console.log("failed");
		}
	};

	// console.log(logInfo);

	return { index, amount, logInfo };
};

export default AmberPayApi;
