import { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BikeBrandApi from "../../api/bike/BikeBrandApi";
import Spinner from "../../components/loader/Spinner";

const BrandList = () => {
	const { brands, indexBrand } = BikeBrandApi();

	useEffect(() => {
		indexBrand();
	}, []);
	return (
		<Fragment>
			<div className="flex w-full items-center justify-between pb-2">
				<div>
					<h3 className="border-b pb-2 text-lg font-medium leading-6 text-gray-900">
						Brands
					</h3>
				</div>
				<div className="flex text-sm font-medium text-blue-600">
					<span className="px-2">Total: </span> {brands.length}{" "}
				</div>
			</div>
			<div>
				{Object.keys(brands).length == 0 ? (
					<div className="flex h-[7rem] items-center justify-center">
						<Spinner />
					</div>
				) : (
					<ul
						role="list"
						className="h-72 w-full divide-y divide-gray-200 overflow-y-auto  scroll-smooth scrollbar-hide"
					>
						{Object.values(brands).map((brand) => (
							<li key={brand.id} className="flex py-4">
								<img
									className="h-10 w-10 rounded-full"
									src={brand.logo}
									alt=""
								/>
								<div className="ml-3 flex w-full items-center justify-between">
									<div className="text-sm font-medium text-gray-900">
										{brand.brand_nm}
									</div>
									<NavLink
										to="#"
										className="text-indigo-600 hover:text-indigo-900"
									>
										View
									</NavLink>
								</div>
							</li>
						))}
					</ul>
				)}
				<div className="mt-6">
					<a
						href="#"
						className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
					>
						View all
					</a>
				</div>
			</div>
		</Fragment>
	);
};

export default BrandList;
