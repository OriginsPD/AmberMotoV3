import { CSSProperties, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormConfig from "../../../components/config/FormConfig";
import { documentTitle } from "../../../gen/documentConfig";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import { DocumentDownloadIcon } from "@heroicons/react/outline";

// Style
const divStyle: CSSProperties = {
	backgroundColor: "blue",
};

const AuthRegister = () => {
	const { user } = useParams() as any;
	const {
		RegisterSchema,
		RegisterForm,
		storeInfo,
		formRegister,
		dispatch,
		ACTIONS,
		state,
		resetInfo,
	} = FormConfig();

	const {
		register,
		handleSubmit,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm({ resolver: yupResolver(RegisterSchema) });

	const onSubmit = () => {
		formRegister();
		resetInfo();
		reset(state);
	};

	useEffect(() => {
		reset(state);
	}, [state]);

	useEffect(() => {
		documentTitle(`${user} Login`);
		if (user === "Associate") {
			dispatch({
				type: ACTIONS.CHANGE,
				payload: { key: "mode", value: false },
			});
		} else {
			dispatch({
				type: ACTIONS.CHANGE,
				payload: { key: "mode", value: true },
			});
		}
	}, []);

	return (
		<div>
			<div className="relative overflow-hidden bg-sky-700 pb-32">
				<div
					aria-hidden="true"
					className="absolute inset-y-0 inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0"
				>
					<div className="absolute inset-0 flex">
						<div className="h-full w-1/2" style={divStyle}></div>
						<div className="h-full w-1/2" style={divStyle}></div>
					</div>
					<div className="relative flex justify-center">
						<svg
							className="flex-shrink-0"
							width="1750"
							height="308"
							viewBox="0 0 1750 308"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
								fill="#0369a1"
							></path>
							<path
								d="M1465.84 308L16.816 0H1750v308h-284.16z"
								fill="#065d8c"
							></path>
							<path
								d="M1733.19 0L284.161 308H0V0h1733.19z"
								fill="#0a527b"
							></path>
							<path
								d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
								fill="#0a4f76"
							></path>
						</svg>
					</div>
				</div>
				<header className="relative py-10">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-white">{user} Register</h1>
					</div>
				</header>
			</div>

			<main className="relative -mt-32 py-8">
				<section className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md ">
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
						<div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
							{RegisterForm.map((form) => (
								<div key={form.name}>
									<label
										className="block text-sm font-medium text-gray-700"
										htmlFor={form.name}
									>
										{form.label}
									</label>
									<input
										id={form.name}
										type={form.type}
										{...register(form.name)}
										onChange={storeInfo}
										value={form.value}
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							))}
						</div>
						{user === "Associate" ? (
							<button
								type="button"
								className="inline-flex  rounded-md
							 border border-transparent bg-green-600 px-4 py-2  text-center text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
							>
								<DocumentDownloadIcon
									className="-ml-1 mr-2 h-5 w-5"
									aria-hidden="true"
								/>
								Upload Resume
							</button>
						) : null}

						<div className="mt-6 flex justify-center pt-6">
							<button className="transform rounded-md bg-blue-700 px-10 py-2 text-lg leading-5 text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
								Register
							</button>
						</div>
					</form>
					{Object.keys(errors).length === 0 ? null : (
						<div className="mt-4 rounded-md bg-gray-50 p-5 ">
							<div className="flex">
								<div className="flex-shrink-0">
									<svg
										className="h-5 w-5 text-red-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
								<div className="ml-3">
									<h3 className="text-sm font-medium text-red-800">
										There were {Object.keys(errors).length} errors with your
										submission
									</h3>
									<div className="mt-2 text-sm text-red-700">
										<ul role="list" className="list-disc space-y-1 pl-5">
											{errors.username && <li> {errors.username?.message} </li>}
											{errors.email && <li> {errors.email?.message} </li>}
											{errors.phone && <li> {errors.phone?.message} </li>}
											{errors.address && <li> {errors.address?.message} </li>}
											{errors.password && <li> {errors.password?.message} </li>}
											{errors.passwordConfirm && (
												<li> Password Should Match </li>
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					)}
				</section>
			</main>
		</div>
	);
};

export default AuthRegister;
