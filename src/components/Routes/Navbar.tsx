import { GlobeIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

import useToggle from "../hooks/useToggle";

// Form Portal
import AuthForm from "../Modal/AuthForm";

const Navbar = () => {
	const { isOpen, toggleModal } = useToggle();

	const navigation = [
		{ name: "Brand", href: "/brands" },
		{ name: "Catalogue", href: "/catalogues" },
		{ name: "Member", href: "/members" },
	];
	return (
		<>
			<AuthForm isOpen={isOpen} toggleModal={toggleModal} />

			<header className=" bg-transparent shadow-sm">
				<div className="mx-auto max-w-screen-xl p-4">
					<div className="flex items-center justify-between space-x-4 lg:space-x-10">
						<div className="flex lg:w-0 lg:flex-1">
							<NavLink to={"/"} className="flex h-10 w-20 items-center ">
								<div className="flex items-center text-center">
									<GlobeIcon className="h-10 w-10 rounded-l-full  text-blue-600" />
									<div className="rounded-r-full px-1.5 text-2xl font-bold italic text-blue-600">
										AmberMotor
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
							<button
								type="button"
								className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
								onClick={toggleModal}
							>
								Log in
							</button>

							<NavLink
								className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
								to="/join"
							>
								Sign up
							</NavLink>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
