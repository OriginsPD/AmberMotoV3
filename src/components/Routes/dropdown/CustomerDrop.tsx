import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	BellIcon,
	LogoutIcon,
	MenuIcon,
	XIcon,
} from "@heroicons/react/outline";
import AssociateAuth from "../../../api/auth/AssociateAuth";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const CustomerDrop = () => {
	const { logout } = AssociateAuth();
	return (
		<Menu as="div" className="relative ml-3">
			<div>
				<Menu.Button className="flex  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-400">
					<MenuIcon className="h-8 w-8 rounded-full" />
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<a
								href="#"
								className={classNames(
									active ? "bg-gray-100" : "",
									"block px-4 py-2 text-sm text-gray-700"
								)}
							>
								Your Profile
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a
								href="#"
								className={classNames(
									active ? "bg-gray-100" : "",
									"block px-4 py-2 text-sm text-gray-700"
								)}
							>
								Settings
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<button
								onClick={logout}
								className={classNames(
									active ? "bg-gray-100" : "",
									" flex w-full items-center space-x-1 px-4 py-2 text-sm text-gray-700"
								)}
							>
								<LogoutIcon className="h-4 w-auto" />
								<span>Logout</span>
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default CustomerDrop;