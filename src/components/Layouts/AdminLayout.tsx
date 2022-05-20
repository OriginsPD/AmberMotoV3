import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideDashboard from "../../pages/admin/SideDashboard";
import AdminNav from "../Routes/Admin/AdminNav";

const AdminLayout = () => {
	const location = useLocation();
	const currentLocation = location.pathname || "";

	const responsiveAddress = [
		"/Admin/rentals",
		"/Admin/salesLog",
		"/Admin/income",
		"/Admin/pending",
	];

	// console.log(currentLocation);

	return (
		<>
			<div className="min-h-full">
				<AdminNav />
				<main className="-mt-24 pb-8">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<h1 className="sr-only">Page title</h1>
						{/* Main 3 column grid */}
						<div
							className={`grid grid-cols-1 items-start gap-4 ${
								responsiveAddress.includes(currentLocation)
									? ""
									: "lg:grid-cols-3"
							} lg:gap-8`}
						>
							{/* Left column */}
							<div className="grid grid-cols-1 gap-4 lg:col-span-2">
								<section aria-labelledby="section-1-title">
									<h2 className="sr-only" id="section-1-title">
										Section title
									</h2>
									<div className="overflow-hidden rounded-lg bg-white shadow">
										<div className="p-6">
											<Outlet />
										</div>
									</div>
								</section>
							</div>

							{responsiveAddress.includes(currentLocation) ? null : (
								<Fragment>
									{/* Right column */}
									<div className="grid grid-cols-1 gap-4">
										<section aria-labelledby="section-2-title">
											<h2 className="sr-only" id="section-2-title">
												Section title
											</h2>
											<div className="overflow-hidden rounded-lg bg-white shadow">
												<div className="p-6">
													<SideDashboard />
												</div>
											</div>
										</section>
									</div>
								</Fragment>
							)}
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default AdminLayout;
