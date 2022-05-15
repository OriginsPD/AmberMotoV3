import { useEffect, useState } from "react";
import BikeDetailApi from "../../api/bike/BikeDetailApi";
import ToggleSwitch from "../../components/inputElement/ToggleSwitch";
import DotLoader from "../../components/loader/DotLoader";

const people = [
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		email: "lindsay.walton@example.com",
		role: "Member",
	},
	// More people...
];

const VehicleStatusTable = () => {
	const { bikeDetailIndex, bikeList } = BikeDetailApi();

	const [refresh, setRefresh] = useState<number>(1);

	useEffect(() => {
		bikeDetailIndex();
	}, [refresh]);

	// console.log(refresh);
	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<p className="mt-2 text-sm capitalize text-gray-700">
							View and modify Bike Availability anytime.
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
											Category
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Brand
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Model
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Status
										</th>
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
										></th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									{Object.keys(bikeList).length === 0 ? (
										<tr>
											<td
												colSpan={6}
												className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 md:pl-0"
											>
												<div className="my-2 flex items-center justify-center">
													<DotLoader />
												</div>
											</td>
										</tr>
									) : (
										Object.values(bikeList).map((bike) => (
											<tr key={bike.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{bike.category.category_nm}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{bike.brand.brand_nm}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{bike.bike_model}
												</td>

												<td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
													<span
														className={`${
															bike.availability ? `bg-green-200` : `bg-red-200`
														} rounded-xl px-4 py-1 font-semibold text-gray-600`}
													>
														{bike.availability ? "Yes" : "No"}
													</span>
												</td>
												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
													<ToggleSwitch
														id={bike.id}
														setRefresh={setRefresh}
														status={bike.availability}
													/>
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

export default VehicleStatusTable;
