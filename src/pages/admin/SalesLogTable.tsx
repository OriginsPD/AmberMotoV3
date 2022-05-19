import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";

// Configuration
import { LogListProp } from "../../constants/ApiConfig";

// Api
import { getAmberPayList } from "../../api/payment/AmberPayLogApi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import RaceLoader from "../../components/loader/RaceLoader";

var formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0,

	// These options are needed to round to whole numbers if that's what you want.
	//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const SalesLogTable = () => {
	const { isLoaded, logList } = getAmberPayList();
	const [pageCount, setPageCount] = useState(0);
	const [currentLogList, setCurrentLogList] = useState<LogListProp[]>([]);

	useEffect(() => {
		setPageCount(logList.length / 5 - 1);
		setCurrentLogList(logList.slice(5, 10));
	}, [logList]);

	const handleClick = async (data: { selected: number }) => {
		let currentPage = data.selected + 1;

		let firstPageIndex = currentPage * 5;
		let lastPageIndex = firstPageIndex + 5;

		setCurrentLogList(logList.slice(firstPageIndex, lastPageIndex));
	};

	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">Sales Log</h1>
						<p className="mt-2 text-sm capitalize text-gray-700">
							A Log of all Sales for employees
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
											Employee
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Bike Model
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Fee paid
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-right text-sm font-semibold text-gray-900"
										>
											Percentage Earn
										</th>
										{/* <th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
										>
											<span className="sr-only">View</span>
										</th> */}
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
									) : logList.length == 0 ? (
										<tr>
											<td
												colSpan={5}
												className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-400 sm:pl-6 md:pl-0"
											>
												<div className="flex w-full items-center justify-center pt-4">
													No Payment Log Found
												</div>
											</td>
										</tr>
									) : (
										logList.map((log) => (
											<tr key={log.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{log.employee.user.username}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{log.rental.bike.bike_model}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{formatter.format(log.fee_paid)}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
													{log.percentage_earn * 100} %
												</td>
												{/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
													<a
														href="#"
														className="text-indigo-600 hover:text-indigo-900"
													>
														View<span className="sr-only">, {log.id}</span>
													</a>
												</td> */}
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

export default SalesLogTable;
