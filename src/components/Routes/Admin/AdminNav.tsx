import AdminDrop from "../dropdown/AdminDrop";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Home", href: "#", current: true },
	{ name: "Profile", href: "#", current: false },
	{ name: "Resources", href: "#", current: false },
	{ name: "Company Directory", href: "#", current: false },
	{ name: "Openings", href: "#", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const AdminNav = () => {
	return (
		<Popover as="header" className="bg-indigo-600 pb-24">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<div className="relative flex items-center justify-center py-5 lg:justify-between">
							{/* Logo */}
							<div className="absolute left-0 flex-shrink-0 lg:static">
								<a href="#">
									<span className="sr-only">Workflow</span>
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
										alt="Workflow"
									/>
								</a>
							</div>

							{/* Right section on desktop */}
							<div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
								<button
									type="button"
									className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								<AdminDrop />
							</div>

							{/* Search */}
							<div className="min-w-0 flex-1 px-12 lg:hidden">
								<div className="mx-auto w-full max-w-xs">
									<label htmlFor="desktop-search" className="sr-only">
										Search
									</label>
									<div className="relative text-white focus-within:text-gray-600">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
											<SearchIcon className="h-5 w-5" aria-hidden="true" />
										</div>
										<input
											id="desktop-search"
											className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
											placeholder="Search"
											type="search"
											name="search"
										/>
									</div>
								</div>
							</div>

							{/* Menu button */}
							<div className="absolute right-0 flex-shrink-0 lg:hidden">
								{/* Mobile menu button */}
								<Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Popover.Button>
							</div>
						</div>
						<div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
							<div className="grid grid-cols-3 items-center gap-8">
								<div className="col-span-2">
									<nav className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current ? "text-white" : "text-indigo-100",
													"rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</nav>
								</div>
								<div>
									<div className="mx-auto w-full max-w-md">
										<label htmlFor="mobile-search" className="sr-only">
											Search
										</label>
										<div className="relative text-white focus-within:text-gray-600">
											<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
												<SearchIcon className="h-5 w-5" aria-hidden="true" />
											</div>
											<input
												id="mobile-search"
												className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
												placeholder="Search"
												type="search"
												name="search"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Transition.Root as={Fragment}>
						<div className="lg:hidden">
							<Transition.Child
								as={Fragment}
								enter="duration-150 ease-out"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="duration-150 ease-in"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
							</Transition.Child>

							<Transition.Child
								as={Fragment}
								enter="duration-150 ease-out"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="duration-150 ease-in"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Popover.Panel
									focus
									className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
								>
									<div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="pt-3 pb-2">
											<div className="flex items-center justify-between px-4">
												<div>
													<img
														className="h-8 w-auto"
														src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
														alt="Workflow"
													/>
												</div>
												<div className="-mr-2">
													<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
														<span className="sr-only">Close menu</span>
														<XIcon className="h-6 w-6" aria-hidden="true" />
													</Popover.Button>
												</div>
											</div>
											<div className="mt-3 space-y-1 px-2">
												<a
													href="#"
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
												>
													Home
												</a>
												<a
													href="#"
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
												>
													Profile
												</a>
												<a
													href="#"
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
												>
													Resources
												</a>
												<a
													href="#"
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
												>
													Company Directory
												</a>
												<a
													href="#"
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
												>
													Openings
												</a>
											</div>
										</div>
										<div className="pt-4 pb-2">
											<div className="flex items-center px-5">
												<div className="flex-shrink-0">
													<img
														className="h-10 w-10 rounded-full"
														src={user.imageUrl}
														alt=""
													/>
												</div>
												<div className="ml-3 min-w-0 flex-1">
													<div className="truncate text-base font-medium text-gray-800">
														{user.name}
													</div>
													<div className="truncate text-sm font-medium text-gray-500">
														{user.email}
													</div>
												</div>
												<button
													type="button"
													className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												>
													<span className="sr-only">View notifications</span>
													<BellIcon className="h-6 w-6" aria-hidden="true" />
												</button>
											</div>
											<div className="mt-3 space-y-1 px-2">
												{userNavigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
													>
														{item.name}
													</a>
												))}
											</div>
										</div>
									</div>
								</Popover.Panel>
							</Transition.Child>
						</div>
					</Transition.Root>
				</>
			)}
		</Popover>
	);
};

export default AdminNav;