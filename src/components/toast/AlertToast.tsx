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
				className: "shadow-xl border-2 -mr-2",
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
				className: "shadow-xl border-2 -mr-2",
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
				className: "shadow-xl border-2 -mr-2",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const ReservedSuccess = () => {
		setTimeout(() => {
			toast.success(`Motor Bike Reserved Successful `, {
				position: "top-center",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-green-800",
				className: "shadow-xl border-2 -mr-2",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	// const ReservedSuccess = () => {
	// 	setTimeout(() => {
	// 		toast.success(
	// 			<div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
	// 				<div>
	// 					<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
	// 						<CheckIcon
	// 							className="h-6 w-6 text-green-600"
	// 							aria-hidden="true"
	// 						/>
	// 					</div>
	// 					<div className="mt-3 text-center sm:mt-5">
	// 						<div className="text-lg font-medium leading-6 text-gray-900">
	// 							Payment successful
	// 						</div>
	// 						<div className="mt-2">
	// 							<p className="text-sm text-gray-500">
	// 								Lorem ipsum dolor sit amet consectetur adipisicing elit.
	// 								Consequatur amet labore.
	// 							</p>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<div className="mt-5 sm:mt-6">
	// 					<button
	// 						type="button"
	// 						className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
	// 					>
	// 						Go back to dashboard
	// 					</button>
	// 				</div>
	// 			</div>,
	// 			{
	// 				position: "top-center",
	// 				bodyClassName:
	// 					"px-5 text-sm font-light capitalize text-lg text-green-800",
	// 				className: "shadow-xl border-2 -mr-2",
	// 				hideProgressBar: false,
	// 				pauseOnHover: false,
	// 				closeButton: false,
	// 				closeOnClick: true,
	// 				draggable: true,
	// 				autoClose: 1500,
	// 			}
	// 		);
	// 	}, 800);
	// };

	const UpdatedSuccess = () => {
		setTimeout(() => {
			toast.success(`Updated Successfully `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-green-800",
				className: "shadow-xl border-2 -mr-2",
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
				className: "shadow-xl border-2 -mr-2",
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
				className: "shadow-xl border-2 -mr-2",
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
				className: "shadow-xl border-2 -mr-2",
				hideProgressBar: false,
				pauseOnHover: false,
				closeButton: false,
				closeOnClick: true,
				draggable: true,
				autoClose: 1500,
			});
		}, 800);
	};

	const ReservedFailed = () => {
		setTimeout(() => {
			toast.info(`Motor Bike Reserved Failed `, {
				position: "bottom-right",
				bodyClassName:
					"px-5 text-sm font-light capitalize text-lg text-green-800",
				className: "shadow-xl border-2 -mr-2",
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
				className: "shadow-xl border-2 -mr-2",
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
				className: "shadow-xl border-2 -mr-2",
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
		ReservedSuccess,

		// Failed
		AuthFailed,
		CreationFailed,
		ApprovedFailed,
		UpdatedFailed,
		ReservedFailed,

		// Logout
		AuthLogout,
	};
};

export default AlertToast;
