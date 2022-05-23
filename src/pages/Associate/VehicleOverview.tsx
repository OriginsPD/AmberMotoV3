import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import BikeDetailApi from "../../api/bike/BikeDetailApi";
import ClientApi from "../../api/client/ClientApi";
import BikeDetailCard from "../../components/card/BikeDetailCard";

type VehicleOverviewProp = {
	id: number;
	isOpen: boolean;
	toggleModal: () => void;
	closeModal: () => void;
};

const VehicleOverview = ({
	id,
	isOpen,
	toggleModal,
	closeModal,
}: VehicleOverviewProp) => {
	const { clientFind, queryBike } = ClientApi();

	// console.log(id);

	useEffect(() => {
		clientFind(id);
	}, [id]);

	
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="m-4 h-full max-h-full w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
									<BikeDetailCard query={queryBike} />
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default VehicleOverview;
