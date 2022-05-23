import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

// API
import ClientApi from "../../api/client/ClientApi";

// Table
import ClientTable from "./ClientTable";
import CurrentTable from "./CurrentTable";
import PenaltyTable from "./PenaltyTable";

// Modal
import VehicleOverview from "./VehicleOverview";
import useToggle from "../../components/hooks/useToggle";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const ClientAssociate = () => {
	const { pastClientIndex, client, current, penalty, isLoaded } = ClientApi();

	const { isOpen, toggleModal, closeModal } = useToggle();

	const [clientID, setClientID] = useState<number>(0);

	// console.log(isLoaded);

	let [categories] = useState({
		Clients: "",
		Current: "",
		Penalty: "",
	});

	useEffect(() => {
		pastClientIndex();
	}, []);

	return (
		<>
			<div className="px-4 scrollbar-hide sm:px-6 lg:px-2">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<p className="mt-2 text-sm capitalize text-gray-700">
							View All Our Client Information amd Keep track of Rental
							Information.
						</p>
					</div>
				</div>
				<div className="w-full px-2 py-6 sm:px-0">
					<Tab.Group>
						<Tab.List className="flex space-x-1 border-b bg-white">
							{Object.keys(categories).map((category) => (
								<Tab
									key={category}
									className={({ selected }) =>
										classNames(
											"w-full py-2.5 text-sm font-medium leading-5 text-gray-700",
											"ring-white ring-opacity-60 focus:outline-none ",
											selected
												? "border-b-[0.5px] border-b-blue-700 bg-white text-blue-700"
												: "text-gray-600 hover:bg-white/[0.12] hover:text-blue-700"
										)
									}
								>
									{category}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels className="mt-2">
							<Tab.Panel>
								<ClientTable
									setClientID={setClientID}
									toggleModal={toggleModal}
									clientTable={client}
									isLoaded={isLoaded}
								/>
							</Tab.Panel>
							<Tab.Panel>
								<CurrentTable
									setClientID={setClientID}
									toggleModal={toggleModal}
									currentTable={current}
									isLoaded={isLoaded}
								/>
							</Tab.Panel>
							<Tab.Panel>
								<PenaltyTable
									setClientID={setClientID}
									toggleModal={toggleModal}
									penaltyTable={penalty}
									isLoaded={isLoaded}
								/>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
				<VehicleOverview
					id={clientID}
					isOpen={isOpen}
					toggleModal={toggleModal}
					closeModal={closeModal}
				/>
			</div>
		</>
	);
};

export default ClientAssociate;
