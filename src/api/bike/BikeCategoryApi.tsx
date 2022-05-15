import { useState } from "react";
import { accessHost, defaultRequest } from "../../constants/ApiConfig";

const BikeCategoryApi = () => {
	type CategoryProp = {
		id: number;
		category_nm: string;
	};
	const [category, setCategory] = useState<CategoryProp[]>([]);

	const indexCategory = async () => {
		const response = await fetch(`${accessHost}/category`, {
			...defaultRequest,
			method: "GET",
		});

		const queryResponse = await response.json();

		setCategory(queryResponse);
	};

	// console.log(category);

	return { indexCategory, category };
};

export default BikeCategoryApi;
