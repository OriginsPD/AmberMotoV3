import { CheckCircleIcon, LogoutIcon } from "@heroicons/react/solid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useUserInfo from "../hooks/useUserInfo";

const AlertToast = () => {
	const { authInfo } = useUserInfo();

	// Success

	const AuthSuccess = () => {
		setTimeout(() => {
			toast.success(`Welcome Back `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-green-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const CreationSuccess = () => {
		setTimeout(() => {
			toast.success(`Created Successfully `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-green-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const ApprovedSuccess = () => {
		setTimeout(() => {
			toast.success(`Approval Successful `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-green-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const UpdatedSuccess = () => {
		setTimeout(() => {
			toast.success(`Updated Successfully `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-green-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	// Failed
	const AuthFailed = (errorMessage: any) => {
		setTimeout(() => {
			toast.info(`${errorMessage}`, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm capitalize w-auto font-light text-md text-blue-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const CreationFailed = () => {
		setTimeout(() => {
			toast.info(`Created Failed `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-blue-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const ApprovedFailed = () => {
		setTimeout(() => {
			toast.info(`Approval Failed `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-blue-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const UpdatedFailed = () => {
		setTimeout(() => {
			toast.info(`Updated Failed `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-blue-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	// Logout
	const AuthLogout = () => {
		setTimeout(() => {
			toast.success(`Logout Success`, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-gray-800",
				className: "shadow-xl border-2 -mr-2 rounded-l-xl",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	return {
		// Success
		AuthSuccess,
		ApprovedSuccess,
		CreationSuccess,
		UpdatedSuccess,

		// Failed
		AuthFailed,
		CreationFailed,
		ApprovedFailed,
		UpdatedFailed,

		// Logout
		AuthLogout,
	};
};

export default AlertToast;
