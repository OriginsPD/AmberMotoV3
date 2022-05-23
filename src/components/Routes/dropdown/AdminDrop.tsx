import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, LogoutIcon } from "@heroicons/react/outline";
import AssociateAuth from "../../../api/auth/AssociateAuth";
import { NavLink } from "react-router-dom";

const userNavigation = [
	{ name: "Your Profile", href: "/Admin/profile" },
	// { name: "Settings", href: "/Admin/setting" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const AdminDrop = () => {
	const { logout } = AssociateAuth();
	return (
		<>
			{/* Profile dropdown */}
			<Menu as="div" className="relative ml-4 flex-shrink-0">
				<div>
					<Menu.Button className="flex bg-transparent text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
						<MenuIcon className="h-8 w-8 rounded-full text-white" />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute -right-2 z-40 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						{userNavigation.map((item) => (
							<Menu.Item key={item.name}>
								{({ active }) => (
									<NavLink
										to={item.href}
										className={classNames(
											active ? "bg-gray-100" : "",
											" flex w-full items-center space-x-1 px-4 py-2 text-sm text-gray-700"
										)}
									>
										<span>{item.name}</span>
									</NavLink>
								)}
							</Menu.Item>
						))}
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
		</>
	);
};

export default AdminDrop;
