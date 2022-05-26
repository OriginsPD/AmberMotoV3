import { StarIcon } from "@heroicons/react/solid";
import React, { CSSProperties, Fragment, useEffect, useState } from "react";

import CountUp from "react-countup";

// Chart
import AdminChart from "../../components/charts/AdminChart";

// Loader
import RaceLoader from "../../components/loader/RaceLoader";
import Spinner from "../../components/loader/Spinner";

// Api
import { getAmberPayList } from "../../api/payment/AmberPayLogApi";
import RentalApi from "../../api/rental/RentalApi";

const IncomeStats = () => {
	const { isLoaded, logSum, highAssociate, logList, logStats } =
		getAmberPayList();

	let employeeNameList: string[] = [];
	let numberOfSales: number[] = [];

	if (logList.length > 0) {
		employeeNameList = logStats.map((data) => data.employee.user.username);

		numberOfSales = logStats.map((data) => data.total);
	}

	return (
		<div className="space-y-8 divide-y">
			<div className="flex-auto justify-evenly lg:flex">
				<div className="m-5">
					{isLoaded ? (
						logList.length == 0 ? (
							0
						) : (
							//formatter.format(highAssociate.incomeTotal)
							<Fragment>
								<div className="card mx-auto w-full flex-col items-center justify-center  ">
									<div className="my-2 w-full bg-gray-50 text-center ">
										<span className="w-full py-3 px-5 text-center text-xl font-extrabold">
											Top Associate With Most Sales
										</span>
									</div>
									<img
										className="mx-auto mt-20  w-32 rounded-full border-8 border-white"
										src={`https://ui-avatars.com/api/?background=ff6600&color=fff&name=${highAssociate.employee?.user.username}`}
										alt=""
									/>
									<div className="mt-2 text-center text-3xl font-medium">
										{highAssociate.employee?.user.username}
									</div>
									<div className="mt-2 text-center text-sm font-light">
										{highAssociate.employee?.user.email}
									</div>

									<div className="mt-2 px-6 text-center text-3xl font-light">
										<Fragment>
											${" "}
											<CountUp
												start={0}
												end={highAssociate.incomeTotal}
												duration={5}
												separator={","}
												decimal={"."}
												decimals={2}
											/>
										</Fragment>
									</div>
									<hr className="mt-8" />
									{/* <div className="flex p-4">
										<div className="w-1/2 text-center">
											<span className="font-bold">1.8 k</span> Total Sales
										</div>
										<div className="w-0 border border-gray-300"></div>
										<div className="w-1/2 text-center">
											<span className="font-bold">2.0 k</span> Bike Owned
										</div>
									</div> */}
								</div>
							</Fragment>
						)
					) : (
						<div className="card mx-auto w-full flex-col items-center justify-center  ">
							<Spinner />
						</div>
					)}
				</div>

				<div className="lg:mx-8 lg:w-5/12">
					<AdminChart label={employeeNameList} chartData={numberOfSales} />
				</div>

				
			</div>
			<div className="py-8">
				<>
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="sm:flex sm:items-center">
							<div className="sm:flex-auto">
								<h1 className="text-xl font-semibold text-gray-900">
									Income From Each Rental
								</h1>
								<p className="mt-2 text-sm capitalize text-gray-700">
									A list of all rental and payment paid along with percentage
									earn.
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
													Bike Model
												</th>
												<th
													scope="col"
													className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
												>
													Associate
												</th>
												<th
													scope="col"
													className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
												>
													Fee Paid
												</th>
												<th
													scope="col"
													className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
												>
													Associate Percentage
												</th>
												<th
													scope="col"
													className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
												>
													Admin Percentage
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
												logList.map((data) => (
													<tr key={data.id}>
														<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
															{data.rental.bike.bike_model}
														</td>
														<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
															{data.employee.user.username}
														</td>
														<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
															{data.fee_paid}
														</td>
														<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
															{data.percentage_earn * 100} %
														</td>
														<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
															{(1.0 - data.percentage_earn) * 100} %
														</td>
													</tr>
												))
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</>
			</div>
		</div>
	);
};

export default IncomeStats;
