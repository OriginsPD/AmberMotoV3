import { Dialog, Transition } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/solid";
import { Fragment, useEffect } from "react";
import { SingleEmployeeInfo } from "../../api/employee/EmployeeApi";
import { EmployeeProps } from "../../constants/ApiConfig";

type DescriptionModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	id: number;
};

const DescriptionModal = ({
	isOpen,
	closeModal,
	id,
}: DescriptionModalProps) => {
	const { EmployeeShow, employeeInfo } = SingleEmployeeInfo();

	useEffect(() => {
		EmployeeShow(id);
	}, [id]);

	// console.log(employeeInfo);
	return (
		<Fragment>
			<Transition appear show={isOpen} as={Fragment}>
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
								<Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="overflow-hidden bg-white shadow sm:rounded-lg">
										<div className="px-4 py-5 sm:px-6">
											<h3 className="text-lg font-medium leading-6 text-gray-900">
												Applicant Information
											</h3>
											<p className="mt-1 max-w-2xl text-sm text-gray-500">
												Personal details and application.
											</p>
										</div>
										<div className="border-t border-gray-200">
											<dl>
												<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Full name
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														{employeeInfo?.user?.username}
													</dd>
												</div>
												<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Contact Information
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														{employeeInfo?.user?.personal_detail
															?.phone_number ?? 8761114444}
													</dd>
												</div>
												<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Email address
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														{employeeInfo?.user?.email}
													</dd>
												</div>
												<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Address
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														{employeeInfo?.user?.personal_detail?.address ??
															"No Address Added"}
													</dd>
												</div>
												<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Attachments
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														<ul
															role="list"
															className="divide-y divide-gray-200 rounded-md border border-gray-200"
														>
															<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
																<div className="flex w-0 flex-1 items-center">
																	<PaperClipIcon
																		className="h-5 w-5 flex-shrink-0 text-gray-400"
																		aria-hidden="true"
																	/>
																	<span className="ml-2 w-0 flex-1 truncate">
																		resume_back_end_developer.pdf
																	</span>
																</div>
																<div className="ml-4 flex-shrink-0">
																	<a
																		href="#"
																		className="font-medium text-indigo-600 hover:text-indigo-500"
																	>
																		Download
																	</a>
																</div>
															</li>
															<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
																<div className="flex w-0 flex-1 items-center">
																	<PaperClipIcon
																		className="h-5 w-5 flex-shrink-0 text-gray-400"
																		aria-hidden="true"
																	/>
																	<span className="ml-2 w-0 flex-1 truncate">
																		coverletter_back_end_developer.pdf
																	</span>
																</div>
																<div className="ml-4 flex-shrink-0">
																	<a
																		href="#"
																		className="font-medium text-indigo-600 hover:text-indigo-500"
																	>
																		Download
																	</a>
																</div>
															</li>
														</ul>
													</dd>
												</div>
											</dl>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</Fragment>
	);
};

export default DescriptionModal;
