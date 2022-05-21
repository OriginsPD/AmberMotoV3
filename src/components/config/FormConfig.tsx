import useForms from "../hooks/useForms";

import * as yup from "yup";
import AssociateAuth from "../../api/auth/AssociateAuth";

// Form Schema
const RegisterSchema = yup.object({
	username: yup.string().required("Username is required"),
	email: yup.string().email().required("Email Address is Required"),
	phone: yup
		.string()
		.min(7, "Phone number must be valid")
		.max(10, "Phone number must be valid")
		.required("Phone Number must be valid"),
	address: yup.string().required("Address is Required"),
	password: yup
		.string()
		.min(4, "Password should be 4 characters or more")
		.max(8, "Password should 8 characters or less")
		.required("Password is Required"),
	passwordConfirm: yup.string().oneOf([yup.ref("password"), null]),
});
const LoginSchema = yup.object({
	email: yup.string().email().required("Email Address is Required"),
	password: yup
		.string()
		.min(4, "Password should be 4 characters or more")
		.max(8, "Password should 8 characters or less")
		.required("Password is Required"),
});

const FormConfig = () => {
	const {
		ACTIONS,
		loginForm,
		RegisterForm,
		storeInfo,
		dispatch,
		resetInfo,
		state,
	} = useForms();
	const { registerAssociate } = AssociateAuth();

	const formRegister = () => {
		registerAssociate();
	};

	return {
		ACTIONS,
		state,

		// Form Body
		loginForm,
		RegisterForm,

		// Functions
		storeInfo,
		resetInfo,
		formRegister,
		dispatch,

		// Schema
		RegisterSchema,
		LoginSchema,
	};
};

export default FormConfig;
