import { useState } from "react";
import {
	accessHost,
	defaultRequest,
	EmployeeProps,
} from "../../constants/ApiConfig";

type CatalogueState = {
	id: number;
	bike_model: string;
	rental_fee: number;
	image_path: string;
	category: {
		category_nm: string;
	};
};

const CatalogueApi = () => {
	const [vehicleCatalogue, setVehicleCatalogue] = useState<CatalogueState[]>(
		{} as CatalogueState[]
	);

	const [isLoaded, setLoaded] = useState<boolean>(false);

	const [associate, setAssociate] = useState<EmployeeProps>();

	const index = async () => {
		const response = await fetch(`${accessHost}/catalogue`, {
			...defaultRequest,
			method: "GET",
		});

		const queryResponse = await response.json();

		if (response.status === 200) {
			setVehicleCatalogue(queryResponse.body);
		}
	};

	const EmployeeCatalogue = async (id: any) => {
		const response = await fetch(`${accessHost}/catalogue/query/${id}`, {
			...defaultRequest,
			method: "GET",
		});

		const queryResponse = await response.json();
		if (response.status === 200) {
			setVehicleCatalogue(queryResponse.query);
			setAssociate(queryResponse.employee);
			setLoaded(true);
		} else {
			console.log("missed");
		}
		// console.log(queryResponse);
	};

	const QueryCatalogue = async () => {
		const response = await fetch(`${accessHost}/`, {
			...defaultRequest,
			method: "GET",
		});

		const queryResponse = response.json();
		if(response.status){
			
		}
	};

	return { index, vehicleCatalogue, isLoaded, associate, EmployeeCatalogue };
};

export default CatalogueApi;
