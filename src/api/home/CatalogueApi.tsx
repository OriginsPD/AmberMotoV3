import { useState } from "react";
import { accessHost, defaultRequest } from "../../constants/ApiConfig";

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
	const index = async () => {
		const response = await fetch(`${accessHost}/catalogue`, {
			...defaultRequest,
			method: "GET",
		});

		const queryResponse = await response.json();

		if (queryResponse.status === 200) {
			setVehicleCatalogue(queryResponse.body);
		}
	};
	return { index, vehicleCatalogue };
};

export default CatalogueApi;
