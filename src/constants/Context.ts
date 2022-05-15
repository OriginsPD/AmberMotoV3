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
	brand_id: 0,
	category_id: 0,
	bike_model: "",
	rental_fee: 0,
	availability: false,
	image_path: "",
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
