import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";

import {
	LoginIcon,
	LogoutIcon,
	ShieldCheckIcon,
} from "@heroicons/react/outline";
import { ArrowCircleUpIcon, MenuIcon } from "@heroicons/react/solid";

// Hooks
import useToggle from "../hooks/useToggle";

// Form Portal
import AuthForm from "../Modal/AuthForm";
import CheckAuth from "../../auth/CheckAuth";
import CustomerDrop from "./dropdown/CustomerDrop";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
	const { isAuth } = CheckAuth();
	const location = useLocation();
	const { state } = useAuth();
	const { isOpen, toggleModal, closeModal } = useToggle();

	const pathName = location.pathname;

	// console.log(pathName);

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
			<AuthForm
				isOpen={isOpen}
				toggleModal={toggleModal}
				closeModal={closeModal}
			/>

			<header
				data-aos="fade-down"
				data-aos-anchor-placement="top-center"
				data-aos-once={true}
				className={`${
					pathName == "/"
						? "absolute inset-x-0 z-10 bg-gradient-to-b from-orange-700 via-orange-700/80 to-orange-700/5 "
						: "border-b bg-transparent"
				}`}
			>
				<div className="mx-auto max-w-screen-xl  p-4">
					<div className="flex items-center justify-between space-x-4 lg:space-x-10">
						<div className="flex lg:w-0 lg:flex-1">
							<NavLink to={"/"} className="flex h-10 w-20 items-center ">
								<div className="flex items-center text-center">
									<ShieldCheckIcon
										className={`${
											pathName == "/"
												? "h-10 w-auto rounded-l-full  text-white"
												: "h-10 w-auto rounded-l-full  text-blue-600"
										}`}
									/>
									<div
										className={`${
											pathName === "/"
												? "rounded-r-full px-0.5 text-2xl font-bold italic text-white"
												: "rounded-r-full px-0.5 text-2xl font-bold italic text-blue-600"
										}`}
									>
										AmberMotor
									</div>
								</div>
							</NavLink>
						</div>

						<nav className="hidden space-x-8 text-sm font-medium md:flex">
							{navigation.map((nav) => (
								<NavLink
									key={nav.name}
									className={`${
										pathName == "/" ? "text-white" : "text-gray-500"
									}`}
									to={nav.href}
								>
									{nav.name}
								</NavLink>
							))}
						</nav>

						<div className="hidden flex-1 items-center justify-end space-x-4 sm:flex">
							{!state.isAuth ? (
								<>
									<button
										type="button"
										className={`${
											pathName == "/"
												? "flex items-center space-x-1 rounded-lg px-5 py-2 text-sm font-medium text-white"
												: "flex items-center space-x-1 rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
										}`}
										onClick={toggleModal}
									>
										<LoginIcon className="h-4 w-auto" />
										<span>Log in</span>
									</button>
									<NavLink
										className={`${
											pathName == "/"
												? "flex items-center space-x-1 rounded-lg px-5 py-2 text-sm font-medium text-white"
												: "flex items-center space-x-2 rounded-lg bg-orange-600 px-5 py-2 text-sm font-medium text-white"
										}`}
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

						{isAuth ? (
							<div className=" inline-block lg:hidden">
								<CustomerDrop />
							</div>
						) : (
							<Menu
								as="div"
								className="relative z-10 inline-block text-left lg:hidden"
							>
								<div>
									<Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
										<MenuIcon
											className="h-5 w-5 text-white"
											aria-hidden="true"
										/>
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
										<div className="space-y-2 bg-white py-1 px-2">
											<Menu.Item>
												<NavLink
													className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-black"
													to={"/brands"}
												>
													Brand
												</NavLink>
											</Menu.Item>
											<Menu.Item>
												<NavLink
													className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-black"
													to={"/catalogues"}
												>
													Catalogue
												</NavLink>
											</Menu.Item>
											<Menu.Item>
												<NavLink
													className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-black"
													to={"/members"}
												>
													Member
												</NavLink>
											</Menu.Item>

											<Menu.Item>
												<button
													type="button"
													className="flex w-full items-center space-x-1 rounded-lg  px-5 py-2 text-sm font-medium text-black"
													onClick={toggleModal}
												>
													<LoginIcon className="h-4 w-auto" />
													<span>Log in</span>
												</button>
											</Menu.Item>

											<Menu.Item>
												<NavLink
													className="flex items-center space-x-2 rounded-lg  px-5 py-2 text-sm font-medium text-black"
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
						)}
					</div>
				</div>
			</header>
			<div
				data-aos="zoom-in"
				data-aos-offset="200"
				data-aos-easing="ease-in-sine"
				data-aos-duration="800"
				className="fixed bottom-20 right-8 z-10"
			>
				<button className="rounded-full bg-gradient-to-tr from-orange-700 to-yellow-300 p-2">
					<a href="#top">
						<ArrowCircleUpIcon className="h-8 w-auto text-white" />
					</a>
				</button>
			</div>
		</>
	);
};

export default Navbar;
