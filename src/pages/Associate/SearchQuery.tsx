import { CheckIcon, ExclamationIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BikeDetailApi from "../../api/bike/BikeDetailApi";
import DotLoader from "../../components/loader/DotLoader";

import CountUp from "react-countup";
import RaceLoader from "../../components/loader/RaceLoader";

const SearchQuery = () => {
	const { search } = useParams<string>();

	const { BikeQuery, queryBike, isLoaded } = BikeDetailApi();
	useEffect(() => {
		BikeQuery(search);
	}, [search]);

	// console.log(bikeList);
	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900"></h1>
						<p className="mt-2 text-sm capitalize text-gray-700">
							A list of all {search} query via search.
						</p>
					</div>
				</div>
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<table className="table min-w-full table-auto divide-y divide-gray-300">
								<thead>
									<tr>
										<th
											scope="col"
											className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
										>
											Client Name
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
											Rental Fee
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Rental Period
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Payment Status
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
												colSpan={6}
												className="whitespace-nowrap border-b py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 md:pl-0"
											>
												<div className="my-2 flex items-center justify-center">
													<RaceLoader />
												</div>
											</td>
										</tr>
									) : Object.keys(queryBike).length === 0 ? (
										<tr>
											<td
												colSpan={6}
												className="whitespace-nowrap border-b py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-500 sm:pl-6 md:pl-0"
											>
												<span className="capitalize">
													No {search} Model Found
												</span>
											</td>
										</tr>
									) : (
										Object.values(queryBike).map((bike) => (
											<tr key={bike.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{bike.user.username}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{bike.bike.bike_model}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													${" "}
													<span className="text-xs capitalize">
														{" "}
														<CountUp
															start={0}
															end={bike.bike.rental_fee}
															duration={2}
															separator={","}
															decimal={"."}
															decimals={2}
														/>{" "}
														per day
													</span>
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{new Date(bike.start_date).toLocaleDateString(
														"Jamaica",
														{
															day: "2-digit",
															month: "long",
															year: "2-digit",
														}
													)}{" "}
													{" - "}
													{new Date(bike.end_date).toLocaleDateString(
														"Jamaica",
														{
															day: "2-digit",
															month: "long",
															year: "2-digit",
														}
													)}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
													<div className="flex items-center justify-center">
														{bike.payment_status ? (
															<CheckIcon className="h-5 w-auto text-green-700" />
														) : (
															<ExclamationIcon className="h-5 w-auto text-red-700" />
														)}
													</div>
												</td>
												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
													<button className="text-indigo-600 hover:text-indigo-900">
														View
													</button>
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
	);
};

export default SearchQuery;
