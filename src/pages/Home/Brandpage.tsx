import { useEffect } from "react";
import BikeBrandApi from "../../api/bike/BikeBrandApi";
import PlusLoader from "../../components/loader/PlusLoader";
import { documentTitle } from "../../gen/documentConfig";

const Brandpage = () => {
	const { indexBrand, brands } = BikeBrandApi();

	useEffect(() => {
		documentTitle("Brands");

		indexBrand();
	}, []);

	return (
		<div className="bg-white">
			{Object.keys(brands).length == 0 ? (
				<PlusLoader />
			) : (
				<div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
					<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
						<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
							Shop by Brands
						</h2>
					</div>

					<div className="mt-4 flow-root">
						<div className="-my-2">
							<div className="relative box-content h-[44rem] max-h-screen overflow-x-auto py-2 xl:overflow-visible">
								<div className="min-w-screen-xl grid h-full grid-cols-2 gap-2 overflow-y-auto py-2 px-4 scrollbar-hide sm:px-6 md:grid-cols-3 lg:px-8 xl:relative xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
									{brands.map((brand) => (
										<div
											key={brand.id}
											className="relative flex h-80 w-56 cursor-pointer flex-col overflow-hidden rounded-lg p-6  hover:opacity-75 xl:w-auto"
										>
											<span aria-hidden="true" className="absolute inset-0">
												<img
													src={brand.logo}
													alt=""
													className="object-fit h-full w-full  object-contain"
												/>
											</span>
											<span
												aria-hidden="true"
												className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
											/>
											<span className="relative mt-auto text-center text-xl font-bold text-white">
												{brand.brand_nm}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 px-4 sm:hidden">
						<a
							href="#"
							className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
						>
							Browse all categories<span aria-hidden="true"> &rarr;</span>
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default Brandpage;
