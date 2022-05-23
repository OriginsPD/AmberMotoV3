import { EmployeeList } from "../../api/employee/EmployeeApi";

import { EmployeeProps } from "../../constants/ApiConfig";

import { documentTitle } from "../../gen/documentConfig";

import ReactPaginate from "react-paginate";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RaceLoader from "../../components/loader/RaceLoader";

const EmployeeTable = () => {
	const [pageCount, setPageCount] = useState(0);
	const [currentEmployee, setCurrentEmployee] = useState<EmployeeProps[]>(
		{} as EmployeeProps[]
	);

	const { employee, isLoaded } = EmployeeList();

	useEffect(() => {
		documentTitle("Admin");
		setPageCount(Math.ceil(Object.keys(employee).length / 5 - 1));
		setCurrentEmployee(Object.values(employee).slice(5, 10));
	}, [employee]);

	const handleClick = async (data: { selected: any }) => {
		let currentPage = data.selected + 1;

		// console.log(currentPage);
		let firstPageIndex = currentPage * 5;
		let lastPageIndex = firstPageIndex + 5;

		setCurrentEmployee(
			Object.values(employee).slice(firstPageIndex, lastPageIndex)
		);

		// console.log(currentEmployee);
	};

	// console.log(typeof pageCount);

	return (
		<>
			<div className="px-4 py-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							All Employee's Information
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							A list of all the employees including their name, address, email
							and status.
						</p>
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
											Employee Name
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Email
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Address
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Associate Status
										</th>
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
										>
											<span className="sr-only">View</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									{!isLoaded ? (
										<tr>
											<td
												colSpan={5}
												className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
											>
												<div className="flex w-full items-center justify-center pt-4">
													<RaceLoader />
												</div>
											</td>
										</tr>
									) : Object.keys(employee).length == 0 ? (
										<tr>
											<td>No Employee Found</td>
										</tr>
									) : (
										Object.values(currentEmployee).map((person) => (
											<tr key={person.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{person.user.username}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{person.user.email}
												</td>
												<td className=" truncate whitespace-nowrap break-words py-4 px-3 text-sm text-gray-500">
													{person.user.personal_detail?.address ??
														"No Address Added"}
												</td>
												<td
													className={`${
														person.active_flg
															? "text-green-500"
															: "text-red-500"
													} whitespace-nowrap py-2 px-3 text-center text-sm font-medium`}
												>
													{person.active_flg ? "Active" : "InActive"}
												</td>
												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
													<NavLink
														to="#"
														className="text-indigo-600 hover:text-indigo-900"
													>
														View<span className="sr-only">, {person.id}</span>
													</NavLink>
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

export default EmployeeTable;
