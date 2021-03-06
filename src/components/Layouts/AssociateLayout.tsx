import {
	Navigate,
	NavLink,
	Outlet,
	useLocation,
	useNavigate,
} from "react-router-dom";

import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import { MenuAlt1Icon, SearchIcon } from "@heroicons/react/solid";

import { documentTitle } from "../../gen/documentConfig";
import AssociateAuth from "../../api/auth/AssociateAuth";
import AssociateNav from "../Routes/Associate/AssociateNav";

const AssociateLayout = () => {
	const { logout } = AssociateAuth();

	const location = useLocation();
	const navigate = useNavigate();
	const pageName = location?.pathname || "Dashboard";

	const [searchString, setSearchString] = useState<string>("");

	const [sidebarOpen, setSidebarOpen] = useState(false);

	const userNavigation = [
		{ name: "Your Profile", href: "/Associate/profile" },
		// { name: "Settings", href: "/Associate/setting" },
		// { name: "Sign out", href: logout },
	];

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log(searchString);

		navigate(`/Associate/searchQuery/${searchString}`);
		setSearchString("");
	};

	const storeSearchString = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSearchString((preString) => value);
	};

	useEffect(() => {
		documentTitle("Associate");
	}, []);

	// console.log(pageName.length);

	return (
		<>
			<div>
				<AssociateNav
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/>

				<div className="md:pl-64">
					<div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
						<div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
							<button
								type="button"
								className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
								onClick={() => setSidebarOpen(true)}
							>
								<span className="sr-only">Open sidebar</span>
								<MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
							</button>
							<div className="flex flex-1 justify-between px-4 md:px-0">
								<div className="my-4 flex w-full flex-1">
									<form onSubmit={onSubmit} className="w-full">
										<label htmlFor="search-field" className="sr-only">
											Search
										</label>
										<div className="relative flex w-full justify-between text-gray-400 focus-within:text-gray-600">
											<input
												id="search-field"
												maxLength={20}
												minLength={5}
												className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
												placeholder="Search"
												type="text"
												name="search"
												required
												value={searchString}
												onChange={storeSearchString}
											/>
											<button type="submit" className="">
												<SearchIcon className="h-7 w-auto" aria-hidden="true" />
											</button>
										</div>
									</form>
								</div>
								<div className="ml-4 flex items-center md:ml-6">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="flex max-w-xs items-center  text-sm focus:outline-none ">
												<MenuAlt1Icon className="h-8 w-8 " />
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
											<Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{userNavigation.map((item) => (
													<Menu.Item key={item.name}>
														<NavLink
															to={item.href}
															className={
																"block w-full py-2 px-4 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100"
															}
														>
															{item.name}
														</NavLink>
													</Menu.Item>
												))}
												<Menu.Item>
													<button
														onClick={logout}
														className={
															"block w-full py-2 px-4 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100"
														}
													>
														Sign Out
													</button>
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>

						<main className="flex-1">
							<div className="py-6">
								<div className="px-4 sm:px-6 md:px-0">
									<h1 className="text-2xl font-semibold capitalize text-gray-900">
										{pageName.length >= 23 &&
										pageName.length != 26 &&
										pageName !== "/Associate/vehicleStatus"
											? decodeURI(pageName.slice(23))
											: pageName.length == 26
											? "Edit Vehicle"
											: pageName === "/Associate"
											? "Dashboard"
											: decodeURI(pageName.replace("/Associate/", ""))}
									</h1>
								</div>
								<div className="px-4 sm:px-6 md:px-0">
									<div className="py-4">
										<Outlet />
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
};

export default AssociateLayout;
