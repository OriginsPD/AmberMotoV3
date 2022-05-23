import { useState } from "react";
import { Navigate } from "react-router-dom";
import { accessHost, defaultRequest } from "../../constants/ApiConfig";

const BikeBrandApi = () => {
	type BrandProp = {
		id: number;
		brand_nm: string;
		logo: string;
	};
	const [brands, setBrands] = useState<BrandProp[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const indexBrand = async () => {
		const response = await fetch(`${accessHost}/brand`, {
			...defaultRequest,
			method: "GET",
		});

		const queryResponse = await response.json();

		setBrands(queryResponse);
		setIsLoaded(true);
	};

	return { brands, indexBrand, isLoaded };
};

export default BikeBrandApi;
