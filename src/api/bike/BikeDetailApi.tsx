import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForms from "../../components/hooks/useForms";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	BikeListProp,
} from "../../constants/ApiConfig";

import { ReducerState, ReducerStateProp } from "../../constants/Context";

const BikeDetailApi = () => {
	const navigate = useNavigate();
	const { token } = useToken();
	const { state, ACTIONS, dispatch } = useForms();

	const [bikeList, setBikeList] = useState<BikeListProp[]>(
		{} as BikeListProp[]
	);

	const bikeDetailIndex = async () => {
		const response = await fetch(`${accessHost}/bikeInfo`, {
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
			setBikeList(queryResponse.body);
			// console.log(queryResponse.body);
		} else {
			console.log("failed");
		}
	};

	const BikeCreate = async (uploadFile: any) => {
		var data = new FormData();
		data.append("image_path", uploadFile, uploadFile.name);
		data.append("brand_id", state.brand_id);
		data.append("category_id", state.category_id);
		data.append("bike_model", state.bike_model);
		data.append("rental_fee", state.rental_fee);

		const response = await fetch(`${accessHost}/bikeInfo`, {
			...defaultRequest,
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				//"Content-Type": "application/json",
			},
			body: data,
		});

		const queryResponse = await response.json();

		if (queryResponse.status === 200) {
			console.log(queryResponse.image);
		} else {
			console.log("failed");
		}
	};

	const BikeFind = async (id: undefined | string) => {
		const response = await fetch(`${accessHost}/bikeInfo/${id}`, {
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
			setBikeList(queryResponse.body);

			dispatch({ type: ACTIONS.LOAD, payload: { ...queryResponse.body[0] } });
			// console.log(queryResponse.body);
		} else {
			console.log("failed");
		}
	};

	const BikeUpdate = async (id: undefined | string, uploadFile: any) => {
		var data = new FormData();
		if (uploadFile) {
			data.append("image_path", uploadFile, uploadFile.name);
		}
		data.append("brand_id", state.brand_id);
		data.append("category_id", state.category_id);
		data.append("bike_model", state.bike_model);
		data.append("rental_fee", state.rental_fee);

		const response = await fetch(`${accessHost}/bikeInfo/${id}`, {
			...defaultRequest,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(state),
		});

		const queryResponse = await response.json();

		if (queryResponse.status === 200) {
			navigate("/Associate/vehicleList", { replace: true });
		} else {
			console.log("failed");
		}
	};

	const BikeStatusUpdate = async (id: number) => {
		const response = await fetch(`${accessHost}/bikeStatus/${id}`, {
			...defaultRequest,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		const queryResponse = await response.json();

		if (queryResponse.status === 200) {
			console.log("Success");
		} else {
			console.log("failed");
		}
	};

	return {
		bikeDetailIndex,
		bikeList,
		BikeCreate,
		BikeFind,
		BikeUpdate,
		BikeStatusUpdate,
	};
};

export default BikeDetailApi;
