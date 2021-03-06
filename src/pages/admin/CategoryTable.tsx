import { useEffect, useState } from "react";
import BikeCategoryApi from "../../api/bike/BikeCategoryApi";
import RaceLoader from "../../components/loader/RaceLoader";

import ReactPaginate from "react-paginate";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";

type CategoryProp = {
	id: number;
	category_nm: string;
};

const CategoryTable = () => {
	const { category, indexCategory, isLoaded } = BikeCategoryApi();
	useEffect(() => {
		indexCategory();
	}, []);

	const [pageCount, setPageCount] = useState(0);
	const [currentCategory, setCurrentCategory] = useState<CategoryProp[]>(
		{} as CategoryProp[]
	);

	useEffect(() => {
		setPageCount(Math.ceil(Object.keys(category).length / 5 - 1));
		setCurrentCategory(Object.values(category).slice(5, 10));
	}, [category]);

	const handleClick = async (data: { selected: any }) => {
		let currentPage = data.selected + 1;

		// console.log(currentPage);
		let firstPageIndex = currentPage * 5;
		let lastPageIndex = firstPageIndex + 5;

		setCurrentCategory(
			Object.values(category).slice(firstPageIndex, lastPageIndex)
		);

		// console.log(currentCategory);
	};

	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							Category Listing
						</h1>
						<p className="mt-2 text-sm capitalize text-gray-700">
							A list of all the Category That bikes may fall within.
						</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
						>
							Create New Category
						</button>
					</div>
				</div>
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<table className="min-w-full divide-y divide-gray-300">
								<thead>
									<tr>
										<th
											scope="col"
											className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
										>
											Name
										</th>
										{/* <th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Logo
										</th> */}
										{/* <th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Email
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Role
										</th> */}
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
										>
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									{!isLoaded ? (
										<tr>
											<td
												colSpan={3}
												className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
											>
												<div className="flex w-full items-center justify-center pt-4">
													<RaceLoader />
												</div>
											</td>
										</tr>
									) : Object.keys(category).length == 0 ? (
										<tr>
											<td>No Categories Found</td>
										</tr>
									) : (
										currentCategory.map((info) => (
											<tr key={info.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{info.category_nm}
												</td>
												{/* <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
												{info.logo}
											</td> */}
												{/* <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
												{info.email}
											</td>
											<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
												{info.role}
											</td> */}
												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
													<a
														href="#"
														className="text-indigo-600 hover:text-indigo-900"
													>
														Edit<span className="sr-only">, {info.id}</span>
													</a>
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>

						<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
							<div className="hidden w-full py-4 sm:flex sm:flex-1 sm:items-center sm:justify-center">
								<div>
									<ReactPaginate
										previousLabel={<ChevronLeftIcon className="h-5 w-auto" />}
										nextLabel={<ChevronRightIcon className="h-5 w-auto" />}
										breakLabel={"..."}
										pageCount={pageCount}
										marginPagesDisplayed={1}
										pageRangeDisplayed={2}
										onPageChange={handleClick}
										className="flex space-x-2"
										activeClassName="bg-blue-400 text-white mx-2 "
										nextLinkClassName="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
										previousClassName="mr-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
										breakClassName="relative hidden rounded-md mx-2 items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:text-white hover:bg-blue-400 md:inline-flex"
										pageClassName="relative z-0 inline-flex rounded-md mx-1 -space-x-px  shadow-sm"
										pageLinkClassName="relative rounded-md hidden items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:text-white hover:bg-blue-400 md:inline-flex"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CategoryTable;
