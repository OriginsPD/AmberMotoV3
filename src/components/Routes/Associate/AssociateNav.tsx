import { NavLink } from "react-router-dom";

import { Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
	CreditCardIcon,
	HomeIcon,
	PlusIcon,
	StatusOnlineIcon,
	UserIcon,
	ViewListIcon,
	XIcon,
	ShieldCheckIcon,
} from "@heroicons/react/outline";
import NewBikeModal from "../../Modal/NewBikeModal";
import useToggle from "../../hooks/useToggle";

const navigation = [
	{ name: "Dashboard", href: "/Associate", icon: HomeIcon },
	{ name: "Wallet", href: "/Associate/wallet", icon: CreditCardIcon },
	{ name: "Clients", href: "/Associate/client", icon: UserIcon },
	{
		name: "Vehicle Listing",
		href: "/Associate/vehicleList",
		icon: ViewListIcon,
	},
	{
		name: "Vehicle Status",
		href: "/Associate/vehicleStatus",
		icon: StatusOnlineIcon,
	},
];

type AssociateNavProps = {
	sidebarOpen: boolean;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AssociateNav = ({ sidebarOpen, setSidebarOpen }: AssociateNavProps) => {
	const { isOpen, closeModal, toggleModal, setIsOpen } = useToggle();
	return (
		<>
			<NewBikeModal
				isOpen={isOpen}
				toggleModal={toggleModal}
				setIsOpen={setIsOpen}
			/>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-40 flex md:hidden"
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										type="button"
										className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Close sidebar</span>
										<XIcon className="h-6 w-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</Transition.Child>
							<div className="flex flex-shrink-0 items-center px-4">
								<div className="flex items-center justify-center space-x-2 text-2xl font-bold text-orange-500 drop-shadow-xl">
									<ShieldCheckIcon className="h-8 w-auto text-orange-500" />
									AmberMotors
								</div>
							</div>
							<div className="mt-5 h-0 flex-1 overflow-y-auto scrollbar-hide">
								<nav className="space-y-2 px-2">
									{navigation.map((item) => (
										<NavLink
											key={item.name}
											to={item.href}
											className={
												"group flex items-center rounded-md  py-2 px-2 text-base font-medium text-gray-900"
											}
										>
											<item.icon
												className={"mr-4 h-6 w-6 flex-shrink-0 text-gray-500"}
												aria-hidden="true"
											/>
											{item.name}
										</NavLink>
									))}
									<div className=" w-full items-center space-x-2 py-8 text-center">
										<button
											type="button"
											onClick={toggleModal}
											className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											<PlusIcon
												className="-ml-0.5 mr-2 h-4 w-4"
												aria-hidden="true"
											/>
											New Vehicle
										</button>
									</div>
								</nav>
							</div>
						</div>
					</Transition.Child>
					<div className="w-14 flex-shrink-0">
						{/* Dummy element to force sidebar to shrink to fit close icon */}
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 scrollbar-hide">
					<div className="flex flex-shrink-0 items-center px-4">
						<div className="flex-col items-center justify-center space-x-2 text-2xl font-bold text-orange-500 drop-shadow-xl">
							<div className="flex">
								<ShieldCheckIcon className="h-8 w-auto text-orange-500" />
								AmberMotors
							</div>
							<div className="text-right text-xs italic">Associate Mode</div>
						</div>
					</div>
					<div className="mt-5 flex flex-grow flex-col">
						<nav className="flex-1 space-y-3 px-2 pb-4">
							{navigation.map((item) => (
								<NavLink
									key={item.name}
									to={item.href}
									className={
										"group flex items-center rounded-md py-2 px-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
									}
								>
									<item.icon
										className={"mr-3 h-6 w-6 flex-shrink-0 text-gray-500"}
										aria-hidden="true"
									/>
									{item.name}
								</NavLink>
							))}
							<div className=" w-full items-center space-x-2 py-8 text-center">
								<button
									type="button"
									onClick={toggleModal}
									className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									<PlusIcon
										className="-ml-0.5 mr-2 h-4 w-4"
										aria-hidden="true"
									/>
									New Vehicle
								</button>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default AssociateNav;
