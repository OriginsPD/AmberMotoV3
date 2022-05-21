import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

import {
	LoginIcon,
	LogoutIcon,
	ShieldCheckIcon,
} from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";

// Hooks
import useToggle from "../hooks/useToggle";

// Form Portal
import AuthForm from "../Modal/AuthForm";
import CheckAuth from "../../auth/CheckAuth";
import CustomerDrop from "./dropdown/CustomerDrop";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
	const { isAuth } = CheckAuth();
	const { state } = useAuth();
	const { isOpen, toggleModal } = useToggle();

	const navigation = [
		{ name: "Brand", href: "/brands" },
		{ name: "Catalogue", href: "/catalogues" },
		{ name: "Member", href: "/members" },
	];

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(" ");
	}
	return (
		<>
			<AuthForm isOpen={isOpen} toggleModal={toggleModal} />

			<header className=" border-b bg-transparent shadow-lg ">
				<div className="mx-auto max-w-screen-xl p-4">
					<div className="flex items-center justify-between space-x-4 lg:space-x-10">
						<div className="flex lg:w-0 lg:flex-1">
							<NavLink to={"/"} className="flex h-10 w-20 items-center ">
								<div className="flex items-center text-center">
									<ShieldCheckIcon className="h-10 w-auto rounded-l-full  text-blue-600" />
									<div className="rounded-r-full px-0.5 text-2xl font-bold italic text-blue-600">
										AmberMotor2
									</div>
								</div>
							</NavLink>
						</div>

						<nav className="hidden space-x-8 text-sm font-medium md:flex">
							{navigation.map((nav) => (
								<NavLink key={nav.name} className="text-gray-500" to={nav.href}>
									{nav.name}
								</NavLink>
							))}
						</nav>

						<div className="hidden flex-1 items-center justify-end space-x-4 sm:flex">
							{!state.isAuth ? (
								<>
									<button
										type="button"
										className="flex items-center space-x-1 rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
										onClick={toggleModal}
									>
										<LoginIcon className="h-4 w-auto" />
										<span>Log in</span>
									</button>
									<NavLink
										className="flex items-center space-x-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
										to="/join"
									>
										<LogoutIcon className="h-4 w-auto" />
										<span>Sign up</span>
									</NavLink>
								</>
							) : (
								<>
									<CustomerDrop />
								</>
							)}
						</div>
						<Menu
							as="div"
							className="relative inline-block text-left lg:hidden"
						>
							<div>
								<Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
									<MenuIcon className="h-5 w-5" aria-hidden="true" />
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
								<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="space-y-2 py-1 px-2">
										<Menu.Item>
											<NavLink
												className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-gray-500"
												to={"/brands"}
											>
												Brand
											</NavLink>
										</Menu.Item>
										<Menu.Item>
											<NavLink
												className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-gray-500"
												to={"/catalogues"}
											>
												Catalogue
											</NavLink>
										</Menu.Item>
										<Menu.Item>
											<NavLink
												className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-gray-500"
												to={"/members"}
											>
												Member
											</NavLink>
										</Menu.Item>

										<Menu.Item>
											<button
												type="button"
												className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-gray-500"
												onClick={toggleModal}
											>
												<LoginIcon className="h-4 w-auto" />
												<span>Log in</span>
											</button>
										</Menu.Item>

										<Menu.Item>
											<NavLink
												className="flex items-center space-x-2 rounded-lg  px-5 py-2 text-sm font-medium text-gray-500"
												to="/join"
											>
												<LogoutIcon className="h-4 w-auto" />
												<span>Sign up</span>
											</NavLink>
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
