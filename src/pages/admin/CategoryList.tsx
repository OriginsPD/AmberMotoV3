import { Fragment, useEffect } from "react";
import BikeCategoryApi from "../../api/bike/BikeCategoryApi";
import Spinner from "../../components/loader/Spinner";

const CategoryList = () => {
	const { category, indexCategory } = BikeCategoryApi();
	useEffect(() => {
		indexCategory();
	}, []);
	return (
		<Fragment>
			<div className="flex w-full items-center justify-between pb-2">
				<div className="w-full border-b">
					<h3 className=" pb-2 text-lg font-medium leading-6 text-gray-900">
						Categories
					</h3>
				</div>
				<div className="flex text-sm font-medium text-blue-600">
					<span className="px-2">Total: </span> {category.length}{" "}
				</div>
			</div>
			<div>
				{Object.keys(category).length == 0 ? (
					<div className="flex h-[9.66rem] items-center justify-center">
						<Spinner />
					</div>
				) : (
					<ul
						role="list"
						className="h-[11.66rem] divide-y divide-gray-200 overflow-y-auto scroll-smooth scrollbar-hide"
					>
						{Object.values(category).map((categoryDetail) => (
							<li key={categoryDetail.id} className="flex py-4">
								{/* <img className="h-10 w-10 rounded-full" src={categoryDetail.logo} alt="" /> */}
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-900">
										{categoryDetail.category_nm}
									</p>
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

export default CategoryList;
