import {
	accessHost,
	defaultRequest,
	rentalStatusProp,
	RentalState,
} from "../../constants/ApiConfig";
import { SetStateAction, useState } from "react";
import useToken from "../../components/hooks/useToken";
import useForms from "../../components/hooks/useForms";
import AlertToast from "../../components/toast/AlertToast";
import { useNavigate } from "react-router-dom";

const RentalApi = () => {
	const { token } = useToken();
	const { ReservedSuccess, ReservedFailed } = AlertToast();
	const { state } = useForms();

	const navigate = useNavigate();

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

	//Callback to pass value
	function myCallback(getStateValues: any): any {
		let oRet = "";
		return getStateValues(oRet);
	}

	const rentalCreate = async () => {
		var data = new FormData();

		data.append("id", state.id);
		data.append("start_date", state.start_date);
		data.append("end_date", state.end_date);

		const response = await fetch(`${accessHost}/rental/create`, {
			...defaultRequest,
			method: "POST",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: data,
		});

		console.log(state);

		const queryResponse = await response.json();

		if (response.status === 200) {
			ReservedSuccess();
			navigate("/catalogues");
		} else {
			ReservedFailed();
		}
	};

	return {
		statusIndex,
		rentalIndex,
		rentalStatus,
		rentalList,
		rentalCreate,
		isLoaded,
	};
};

export default RentalApi;
