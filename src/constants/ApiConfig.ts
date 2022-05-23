// export const accessHost = "https://api.bikerental.fimijm.com/api";
export const accessHost = "http://127.0.0.1:8000/api";

export const XSRFTOKEN =
	"XSRF-TOKEN=eyJpdiI6IjgyMXRsb1ZkcWJYT1k2aG1wQkZ6Wmc9PSIsInZhbHVlIjoiS3R1eGQ1VVh0UHJBWmRqZjFEQTBNOFloK1BRaWYyY09STGxzd0RtbUZkTUR6R0h4dVBBcHZwcTJjbm9kRHJIYzZZNjJSWmtjbmhWeisyUUlVWk5CV2RWZGRvdkhBQkt0ZE16MlNTQnplaWV3c21Qa3RGUEo3M2toTGd4YTFyTEkiLCJtYWMiOiI5NzNhMjI4M2JhZjYxNmE5NmIxMzI5ZmJmYWFiYTZjODU1ODQ2NzMyZDM1ODNjOTFmNDQ1YWRmMTM4MTIyMmYzIiwidGFnIjoiIn0%3D";

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

export type InActiveUserProp = {
	id: number;
	username: number;
	email: number;
	status: boolean;
	updated_at: string;
	employee: {
		id: number;
		user_id: number;
		active_flg: true | false;
	};
};

export type RentalState = {
	id: number;
	user_id: number;
	employee_id: number;
	bike_id: number;
	payment_fee: number;
	payment_status: false;
	rental_status: boolean;
	start_date: string;
	end_date: string;
	created_at: string;
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
	};
	employee: {
		id: number;
		active_flg: boolean;
		user: {
			id: number;
			username: string;
			email: string;
		};
	};
	user: {
		username: string;
		email: string;
		status: boolean;
		personal_detail: {
			user_id: number;
			address: string;
			phone_number: number;
		};
	};
};

export type QueryBikeProps = {
	id: number;
	user_id: number;
	employee_id: number;
	bike_id: number;
	payment_fee: number;
	payment_status: false;
	rental_status: boolean;
	start_date: string;
	end_date: string;
	created_at: string;
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
	};
	user: {
		username: string;
		email: string;
		status: boolean;
		personal_detail: {
			user_id: number;
			address: string;
			phone_number: number;
		};
	};
};

export type LogListProp = {
	id: number;
	rental_id: number;
	employee_id: number;
	fee_paid: number;
	total: number;
	incomeTotal: number;
	percentage_earn: number;
	employee: {
		user: {
			username: string;
			email: string;
		};
	};
	rental: {
		id: number;
		user_id: number;
		employee_id: number;
		bike_id: number;
		payment_fee: number;
		payment_status: boolean;
		rental_status: boolean;
		start_date: string;
		end_date: string;

		bike: {
			bike_model: string;
			rental_fee: number;
		};
		user: {
			username: number;
			email: number;
		};
	};
};

export type EmployeeProps = {
	id: 1;
	active_flg: boolean;
	created_at: string;
	user: {
		id: 16;
		username: string;
		email: string;
		status: boolean;
		personal_detail: {
			address: string;
			phone_number: number;
			created_at: string;
		} | null;
	};
};

export type LogState = {
	id: number;
	rental_id: number;
	employee_id: number;
	fee_paid: number;
	percentage_earn: number;
	created_at: string;
	rental: {
		id: number;
		bike: {
			bike_model: string;
		};
		user: {
			username: string;
		};
	};
};

export type rentalStatusProp = {
	employee_id: number;
	bike_id: number;
	bike_model: string;
	total: number;
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
		personal_detail: {
			user_id: number;
			address: string;
			phone_number: number;
		};
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
