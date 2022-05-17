export type ContextProp = {
	children: React.ReactNode;
};

export const ReducerState = {
	username: "",
	email: "",
	address: "",
	phone: "",
	password: "",
	password_confirmation: "",
	mode: false,
	id: 0,
	employee_id: 0,
	brand_id: "",
	category_id: "",
	bike_model: "",
	rental_fee: "",
	availability: false,
	image_path: {},
	status: false,
	created_at: "",
	updated_at: "",
	brand: {
		id: 0,
		brand_nm: "",
		logo: "",
		created_at: "",
		updated_at: "",
	},
	category: {
		id: 0,
		category_nm: "",
		created_at: "",
		updated_at: "",
	},
};

export type ReducerStateProp = {
	username: string;
	email: string;
	address: string;
	phone: string;
	password: string;
	password_confirmation: string;
	mode: boolean;
	id: number;
	employee_id: number;
	brand_id: number;
	category_id: number;
	bike_model: string;
	rental_fee: number;
	availability: false;
	image_path?: File;
	status: false;
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

enum FormAttributeName {
	"username",
	"email",
	"phone",
	"address",
	"password",
	"password_confirmation",
}

enum FormAttributeType {
	"text",
	"number",
	"password",
}

export type FormBody = {
	name: keyof typeof FormAttributeName;
	label: string;
	type: keyof typeof FormAttributeType;
	value: string | number;
};
