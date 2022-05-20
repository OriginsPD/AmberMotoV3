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

	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

	return (
		<div className="space-y-8 divide-y">
			<div className="flex-auto justify-between lg:flex">
				<div className="m-5">
					<div className="my-2 bg-gray-50 ">
						<span className="w-full py-3 px-5 text-center text-xl font-extrabold">
							Top Associate With Most Sales
						</span>
					</div>
					<div className="rounded-lg bg-white p-10 ">
						<div className="flex flex-col items-center gap-1 text-center">
							<h1 className="mx-auto mb-8 w-full text-lg font-bold leading-none tracking-tighter text-black lg:text-2xl lg:uppercase">
								Accumulated Income
							</h1>
							<strong className="mx-auto mb-8 flex items-end justify-center text-center text-3xl font-black leading-none lg:text-4xl ">
								<span
									className={`${
										highAssociate.incomeTotal == 0
											? "text-red-500"
											: "text-green-500"
									}`}
								>
									{isLoaded ? (
										logList.length == 0 ? (
											0
										) : (
											//formatter.format(highAssociate.incomeTotal)
											<Fragment>
												${" "}
												<CountUp
													start={0}
													end={highAssociate.incomeTotal}
													duration={2}
													separator={","}
													decimal={"."}
													decimals={2}
												/>
											</Fragment>
										)
									) : (
										<div className="flex h-[7rem] items-center justify-center">
											<Spinner />
										</div>
									)}
								</span>
							</strong>
							<div className="flex ">
								<p className="bg-gradient-to-tr from-blue-400 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent">
									{highAssociate.employee?.user.username}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
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
														<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
															{data.fee_paid}
														</td>
														<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
															{data.percentage_earn}
														</td>
														<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
															{(1.0 - data.percentage_earn) * 100} %
														</td>
														<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
															<a
																href="#"
																className="text-indigo-600 hover:text-indigo-900"
															>
																View
																<span className="sr-only">, {data.id}</span>
															</a>
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
