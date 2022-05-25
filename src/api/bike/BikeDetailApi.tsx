import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForms from "../../components/hooks/useForms";
import useToken from "../../components/hooks/useToken";
import {
	accessHost,
	defaultRequest,
	BikeListProp,
	QueryBikeProps,
} from "../../constants/ApiConfig";

import AlertToast from "../../components/toast/AlertToast";

const BikeDetailApi = () => {
	const { CreationSuccess, CreationFailed, UpdatedSuccess, UpdatedFailed } =
		AlertToast();
	const navigate = useNavigate();
	const { token } = useToken();
	const { state, ACTIONS, dispatch } = useForms();

	const [isLoaded, setIsLoad] = useState(false);
	const [bikeList, setBikeList] = useState<BikeListProp[]>(
		{} as BikeListProp[]
	);

	const [product, setProduct] = useState<BikeListProp>();

	const [queryBike, setQueryBike] = useState<QueryBikeProps[]>(
		{} as QueryBikeProps[]
	);

	const setBikeInfo = (data: { body: SetStateAction<BikeListProp[]> }) => {
		setIsLoad(true);
		setBikeList(data.body);
	};

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

		if (response.status === 200) {
			setBikeInfo(queryResponse);
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
			},
			body: data,
		});

		const queryResponse = await response.json();

		if (response.status === 200) {
			bikeDetailIndex();
			CreationSuccess();
		} else {
			CreationFailed();
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
			setBikeInfo(queryResponse);

			dispatch({ type: ACTIONS.LOAD, payload: { ...queryResponse.body[0] } });
		} else {
			console.log("failed");
		}
	};

	const BikeShow = async (id: undefined | string) => {
		const response = await fetch(`${accessHost}/catalogue/${id}`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		const queryResponse = await response.json();

		if (response.status === 200) {
			setProduct(queryResponse.body);
		} else {
			console.log("failed");
		}
	};

	const BikeQuery = async (queryString: string | undefined) => {
		const response = await fetch(`${accessHost}/searchQuery/${queryString}`, {
			...defaultRequest,
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
			},
		});

		const queryResponse = await response.json();

		if (response.status == 200) {
			setQueryBike(queryResponse.query);
			setIsLoad(true);
		} else {
			console.log("missed");
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

		const response = await fetch(`${accessHost}/bikeInfoUpdate/${id}`, {
			...defaultRequest,
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				//"Content-Type": "application/json",
			},
			body: data,
		});

		// const queryResponse = await response.json();

		if (response.status === 200) {
			navigate("/Associate/vehicleList", { replace: true });
			UpdatedSuccess();
		} else {
			UpdatedFailed();
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

		//const queryResponse = await response.json();

		if (response.status === 200) {
			UpdatedSuccess();
		} else {
			UpdatedFailed();
		}
	};

	return {
		isLoaded,
		product,
		queryBike,
		BikeFind,
		BikeShow,
		bikeList,
		BikeQuery,
		BikeUpdate,
		BikeCreate,
		bikeDetailIndex,
		BikeStatusUpdate,
	};
};

export default BikeDetailApi;
