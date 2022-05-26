import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import FormSlider from "./FormSlider";

type QuerySliderProps = {
	isOpen: boolean;
	toggleModal: () => void;
	closeModal: () => void;
};

const QuerySlider = ({ closeModal, isOpen, toggleModal }: QuerySliderProps) => {
	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-lg">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl scrollbar-hide">
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-3xl font-medium capitalize text-gray-900">
												{" "}
												Find the Bike you always been searching for{" "}
											</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											<FormSlider />
											<div className="-mt-10 bg-gray-50 px-4 py-3 text-right sm:px-6">
												<button
													type="submit"
													className="inline-flex items-center justify-center space-x-2 rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
												>
													<SearchIcon className="h-5 w-auto text-white" />
													<span>Search</span>
												</button>
											</div>

											{/* /End replace */}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default QuerySlider;
