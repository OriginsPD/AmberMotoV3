import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import FormConfig from "../config/FormConfig";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AssociateAuth from "../../api/auth/AssociateAuth";

type AuthFormProps = {
	isOpen: boolean;
	toggleModal: () => void;
	closeModal: () => void;
};

const AuthForm = ({ isOpen, toggleModal, closeModal }: AuthFormProps) => {
	const { loginAssociate } = AssociateAuth();
	const { LoginSchema, loginForm, storeInfo, resetInfo } = FormConfig();

	const {
		register,
		clearErrors,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(LoginSchema) });

	const clearForm = () => {
		reset();
		clearErrors();
		resetInfo();
	};

	const onSubmit = () => {
		loginAssociate();
		clearForm();
		toggleModal();
	};

	useEffect(() => {
		reset();
	}, []);

	return (
		<>
			<Transition appear show={isOpen} afterLeave={clearForm} as={Fragment}>
				<Dialog as="div" className="relative z-10 w-full " onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto scrollbar-hide">
						<div className="flex min-h-full items-center justify-center p-2 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="flex min-h-full">
										<div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
											<div className="mx-auto w-full max-w-sm lg:w-96">
												<div>
													<div className="flex items-center space-x-4">
														<img
															className="h-12 w-auto"
															src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
															alt="Workflow"
														/>
														<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
															Welcome Back
														</h2>
													</div>
													<p className="mt-2 text-sm text-gray-600">
														We look forward to travel with you again
													</p>
												</div>

												<div className="mt-8">
													<div>
														<div>
															<p className="text-sm font-medium text-gray-700">
																Login in with
															</p>

															<div className="mt-1 grid grid-cols-3 gap-3">
																<div>
																	<a
																		href="#"
																		className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
																	>
																		<span className="sr-only">
																			Sign in with Facebook
																		</span>
																		<svg
																			className="h-5 w-5"
																			aria-hidden="true"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																		>
																			<path
																				fillRule="evenodd"
																				d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
																				clipRule="evenodd"
																			/>
																		</svg>
																	</a>
																</div>

																<div>
																	<a
																		href="#"
																		className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
																	>
																		<span className="sr-only">
																			Sign in with Twitter
																		</span>
																		<svg
																			className="h-5 w-5"
																			aria-hidden="true"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																		>
																			<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
																		</svg>
																	</a>
																</div>

																<div>
																	<a
																		href="#"
																		className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
																	>
																		<span className="sr-only">
																			Sign in with GitHub
																		</span>
																		<svg
																			className="h-5 w-5"
																			aria-hidden="true"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																		>
																			<path
																				fillRule="evenodd"
																				d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
																				clipRule="evenodd"
																			/>
																		</svg>
																	</a>
																</div>
															</div>
														</div>

														<div className="relative mt-6">
															<div
																className="absolute inset-0 flex items-center"
																aria-hidden="true"
															>
																<div className="w-full border-t border-gray-300" />
															</div>
															<div className="relative flex justify-center text-sm">
																<span className="bg-white px-2 text-gray-500">
																	Or continue with
																</span>
															</div>
														</div>
													</div>

													<div className="mt-6">
														<form
															onSubmit={handleSubmit(onSubmit)}
															className="space-y-6"
														>
															{loginForm.map((form) => (
																<div key={form.name}>
																	<label
																		htmlFor={form.name}
																		className="block text-sm font-medium text-gray-700"
																	>
																		{form.label}
																	</label>
																	<div className="mt-1">
																		<input
																			id={form.name}
																			{...register(form.name)}
																			type={form.type}
																			autoComplete={form.name}
																			onChange={storeInfo}
																			value={form.value}
																			className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
																		/>
																	</div>
																</div>
															))}

															<div className="flex items-center justify-between">
																<div className="flex items-center">
																	<input
																		id="remember-me"
																		name="remember-me"
																		type="checkbox"
																		className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
																	/>
																	<label
																		htmlFor="remember-me"
																		className="ml-2 block text-sm text-gray-900"
																	>
																		Remember me
																	</label>
																</div>

																<div className="text-sm">
																	<a
																		href="#"
																		className="font-medium text-green-600 hover:text-green-500"
																	>
																		Forgot your password?
																	</a>
																</div>
															</div>

															<div>
																<button
																	type="submit"
																	className="flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
																>
																	Login
																</button>
															</div>
														</form>
														{Object.keys(errors).length === 0 ? null : (
															<div className="mt-4 rounded-md bg-green-50 p-5 ">
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
																			There were {Object.keys(errors).length}{" "}
																			errors with your submission
																		</h3>
																		<div className="mt-2 text-sm text-red-700">
																			<ul
																				role="list"
																				className="list-disc space-y-1 pl-5"
																			>
																				{errors.email && (
																					<li> {errors.email?.message} </li>
																				)}
																				{errors.password && (
																					<li> {errors.password?.message} </li>
																				)}
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														)}
													</div>
												</div>
											</div>
										</div>
										<div className="relative hidden w-0 flex-1 lg:block">
											<img
												className="absolute inset-0 h-full w-full object-cover"
												src="https://cdn.pixabay.com/photo/2016/11/29/02/25/adult-1866842_960_720.jpg"
												alt=""
											/>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default AuthForm;
