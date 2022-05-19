import { SetStateAction, useEffect, useState } from "react";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	LogListProp,
} from "../../constants/ApiConfig";

const AmberPayLogApi = () => {
	const { token } = useToken();

	// States
	const [highAssociate, setHighAssociate] = useState<LogListProp>(
		{} as LogListProp
	);
	const [logList, setLogList] = useState<LogListProp[]>([]);
	const [logStats, setLogStats] = useState<LogListProp[]>([]);
	const [logSum, setLogSum] = useState(0);
	const [isLoaded, setIsLoad] = useState(false);

	useEffect(() => {
		const fetchAmberLog = async () => {
			const response = await fetch(`${accessHost}/payLog`, {
				...defaultRequest,
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
				},
			});

			const queryResponse = await response.json();

			response.status == 200
				? getLogList(queryResponse)
				: console.log("missed");

			return queryResponse;
		};
		fetchAmberLog();
	}, []);

	const getLogList = (data: {
		body: SetStateAction<LogListProp[]>;
		sum: SetStateAction<number>;
		stats: SetStateAction<LogListProp[]>;
		most: SetStateAction<LogListProp>;
	}) => {
		setLogList(data.body);
		setHighAssociate(data.most);
		setLogSum(data.sum);
		setLogStats(data.stats);
		setIsLoad(true);
	};

	// console.log(highAssociate.employee?.user.username);

	return { logList, logStats, isLoaded, logSum, highAssociate };
};

export default AmberPayLogApi;

export const getAmberPayList = () => {
	const { logList, logSum, logStats, highAssociate, isLoaded } =
		AmberPayLogApi();
	return { logList, highAssociate, logStats, isLoaded, logSum };
};
