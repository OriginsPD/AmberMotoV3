import React, { useReducer, createContext } from "react";
import {
	ContextProp,
	FormBody,
	ReducerState,
	ReducerStateProp,
} from "../../constants/Context";

type FormContextProps = {
	state: typeof ReducerState;
	ACTIONS: typeof ACTIONS;
	loginForm: FormBody[];
	RegisterForm: FormBody[];
	resetInfo: () => void;
	storeInfo: (event: React.ChangeEvent<HTMLInputElement>) => void;
	storeImage: (data: FileList | null) => void;
	dispatch: React.Dispatch<ReducerAction>;
};

export const FormContext = createContext<FormContextProps>(
	{} as FormContextProps
);

enum ACTIONS {
	CREATE = "create-new-info",
	LOAD = "load-bike-info",
	IMAGE = "upload-bike-image",
	CHANGE = "change-mode",
	RESET = "rest-info",
}

type ReducerAction =
	| {
			type: ACTIONS;
			payload: {
				key: string;
				value: number | string;
			};
	  }
	| {
			type: ACTIONS.LOAD;
			payload: {
				id: number;
				employee_id: number;
				brand_id: string;
				category_id: string;
				bike_model: string;
				rental_fee: string;
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
	  }
	| {
			type: ACTIONS.IMAGE;
			payload: {
				name: any;
				lastModified: any;
				size: any;
				type: any;
			};
	  }
	| {
			type: ACTIONS.CHANGE;
			payload: {
				key: string;
				value: number | boolean;
			};
	  }
	| {
			type: ACTIONS.RESET;
	  };

const reducer = (state: typeof ReducerState, action: ReducerAction) => {
	switch (action.type) {
		case ACTIONS.CREATE:
			return {
				...state,
				[action.payload.key]: action.payload.value,
			};
		case ACTIONS.LOAD:
			return {
				...state,
				...action.payload,
			};
		case ACTIONS.CHANGE:
			return {
				...state,
				[action.payload.key]: action.payload.value,
			};
		case ACTIONS.IMAGE:
			return {
				...state,
				["image_path"]: action.payload,
			};
		case ACTIONS.RESET:
			return {
				...ReducerState,
			};
		default:
			return state;
	}
};

const FormContextProvider = ({ children }: ContextProp) => {
	const [state, dispatch] = useReducer(reducer, ReducerState);

	// Functions
	const storeInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		dispatch({ type: ACTIONS.CREATE, payload: { key: name, value: value } });
	};

	const storeImage = (data: FileList | null) => {
		const details = data?.[0];

		// dispatch({
		// 	type: ACTIONS.IMAGE,
		// 	payload: {
		// 		name: details?.name,
		// 		lastModified: details?.lastModified,
		// 		size: details?.size,
		// 		type: details?.type,
		// 	},
		// });

		console.log(details?.type);
	};

	const resetInfo = () => {
		dispatch({ type: ACTIONS.RESET });
	};

	// FormBody

	const loginForm: FormBody[] = [
		{
			label: "Email Address",
			type: "text",
			name: "email",
			value: state.email,
		},
		{
			label: "Password",
			type: "password",
			name: "password",
			value: state.password,
		},
	];

	const RegisterForm: FormBody[] = [
		{
			label: "Username",
			type: "text",
			name: "username",
			value: state.username,
		},
		{
			label: "Email Address",
			type: "text",
			name: "email",
			value: state.email,
		},
		{
			label: "Phone Number",
			type: "number",
			name: "phone",
			value: state.phone,
		},
		{
			label: "Address",
			type: "text",
			name: "address",
			value: state.address,
		},
		{
			label: "Password",
			type: "password",
			name: "password",
			value: state.password,
		},
		{
			label: "Password Confirmation",
			type: "password",
			name: "password_confirmation",
			value: state.password_confirmation,
		},
	];

	// console.log(state.start_date);
	// console.log(state.end_date);

	return (
		<FormContext.Provider
			value={{
				ACTIONS,
				state,
				dispatch,
				storeInfo,
				resetInfo,
				loginForm,
				RegisterForm,
				storeImage,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormContextProvider;
