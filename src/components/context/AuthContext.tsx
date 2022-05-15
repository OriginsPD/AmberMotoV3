import { createContext, useEffect, useReducer } from "react";
import { ContextProp } from "../../constants/Context";

type AuthContextProp = {
	ACTION: typeof ACTION;
	state: initialStateProps;
	dispatch: React.Dispatch<actionProps>;
	authorize: ({ token, authInfo }: initialStateProps) => void;
	updateAuthorize: (authInfo: AuthInfoProp) => void;
	reAuthorize: () => void;
	unAuthorize: () => void;
};

export const AuthContext = createContext<AuthContextProp>(
	{} as AuthContextProp
);

// Constant with Default Action
enum ACTION {
	AUTHORIZE = "auth",
	REAUTHORIZE = "reload-auth",
	UNAUTHORIZE = "unAuth",
	UPDATE_AUTHORIZE = "updateAuthInfo",
}

type AuthInfoProp = {
	id: number;
	username: string;
	email: string;
	status: boolean;
	created_at: string;
	updated_at: string;
	personal_detail: {
		id: number;
		user_id: number;
		address: string;
		phone_number: number;
		created_at: string;
		updated_at: string;
	};
	role_user: {
		id: number;
		role_id: number;
		user_id: number;
		created_at: string;
		updated_at: string;
	};
};

type initialStateProps = {
	token: number | string;
	authInfo: AuthInfoProp | null;
	isAuth?: boolean;
};

const initialState: initialStateProps = {
	token: 0,
	authInfo: null,
	isAuth: false,
};

type actionProps =
	| {
			type: ACTION;
			payload: {
				token: string | number;
				authInfo: AuthInfoProp | null;
				isAuth?: boolean;
			};
	  }
	| {
			type: ACTION.UPDATE_AUTHORIZE;
			payload: {
				authInfo: AuthInfoProp | null;
			};
	  }
	| {
			type: ACTION.UNAUTHORIZE;
	  };

const reducer = (state: initialStateProps, action: actionProps) => {
	switch (action.type) {
		case ACTION.AUTHORIZE:
			return {
				...state,
				isAuth: true,
				token: action.payload.token,
				authInfo: action.payload.authInfo,
			};
		case ACTION.REAUTHORIZE:
			return {
				...state,
				token: action.payload.token,
				isAuth: action.payload.isAuth,
				authInfo: action.payload.authInfo,
			};
		case ACTION.UPDATE_AUTHORIZE:
			return {
				...state,
				authInfo: action.payload.authInfo,
			};
		case ACTION.UNAUTHORIZE:
			return {
				...initialState,
			};

		default:
			return state;
	}
};

// Stores users information in storage
const localLog = ({ token, authInfo, isAuth }: initialStateProps) => {
	localStorage.setItem("token", JSON.stringify(token));
	localStorage.setItem("isAuth", JSON.stringify(isAuth));
	localStorage.setItem("authInfo", JSON.stringify({ ...authInfo }));
};

const AuthContextProvider = ({ children }: ContextProp) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Authorize User
	const authorize = ({ token, authInfo }: initialStateProps) => {
		dispatch({
			type: ACTION.AUTHORIZE,
			payload: { token: token, authInfo: authInfo },
		});
	};

	// Reauthorize When Page Reloads
	const reAuthorize = () => {
		const tokenString = localStorage.getItem("token");
		const token = tokenString ? JSON.parse(tokenString) : null;

		const authString = localStorage.getItem("authInfo");
		const authInfo = authString ? JSON.parse(authString) : {};

		const authStateString = localStorage.getItem("isAuth");
		const isAuth = authStateString ? JSON.parse(authStateString) : false;

		const authorizeInfo = {
			token,
			isAuth,
			authInfo,
		};

		dispatch({ type: ACTION.REAUTHORIZE, payload: { ...authorizeInfo } });
	};

	// Update Authorize User
	const updateAuthorize = (authInfo: AuthInfoProp) => {
		dispatch({
			type: ACTION.UPDATE_AUTHORIZE,
			payload: { authInfo: authInfo },
		});
	};

	// Unauthorize when user logout
	const unAuthorize = () => {
		dispatch({ type: ACTION.UNAUTHORIZE });

		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		localStorage.removeItem("authInfo");
	};

	useEffect(() => {
		state.token !== 0 ? localLog({ ...state }) : reAuthorize();
	}, [state.token && state.authInfo]);

	return (
		<AuthContext.Provider
			value={{
				ACTION,
				authorize,
				reAuthorize,
				unAuthorize,
				updateAuthorize,
				state,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
