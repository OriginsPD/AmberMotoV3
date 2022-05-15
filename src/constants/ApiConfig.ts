export const accessHost = "http://127.0.0.1:8000/api";

type ApiRequestProps = {
	method: string;
	headers: {
		Accept: string;
		"Content-Type"?: string;
		Authorization?: string;
	};
	body?: string;
};

export const defaultRequest: ApiRequestProps = {
	method: "",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

export type BikeListProp = {
	id: number;
	employee_id: number;
	brand_id: number;
	category_id: number;
	bike_model: string;
	rental_fee: number;
	availability: boolean;
	image_path: string;
	status: boolean;
	created_at: string;
	updated_at: string;
	brand: {
		id: number;
		brand_nm: string;
		logo: string;
		created_at: string;
		updated_at: string;
	};
	category: {
		id: number;
		category_nm: string;
		created_at: string;
		updated_at: string;
	};
};

export type BikeDetailProp = {
	id: number;
	user_id: number;
	employee_id: number;
	bike_id: number;
	payment_fee: number;
	payment_status: boolean;
	rental_status: boolean;
	start_date: string;
	end_date: string;
	created_at: string;
	updated_at: string;
	user: {
		id: number;
		username: string;
		email: string;
		status: boolean;
		created_at: string;
		updated_at: string;
		personal_detail: {};
	};
	bike: {
		id: number;
		employee_id: number;
		brand_id: number;
		category_id: number;
		bike_model: string;
		rental_fee: number;
		availability: boolean;
		image_path: string;
		status: boolean;
		created_at: string;
		updated_at: string;
		brand: {
			id: number;
			brand_nm: string;
			logo: string;
			created_at: string;
			updated_at: string;
		};
		category: {
			id: number;
			category_nm: string;
			created_at: string;
			updated_at: string;
		};
	};
	penalties: {
		id: number;
		rental_id: number;
		amount: number;
		status: boolean;
		created_at: string;
		updated_at: string;
	};
};
