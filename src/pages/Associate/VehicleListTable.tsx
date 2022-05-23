import { useEffect } from "react";
import { Link } from "react-router-dom";
import BikeDetailApi from "../../api/bike/BikeDetailApi";
import DotLoader from "../../components/loader/DotLoader";
import { imageUrl } from "../../constants/ImageConfig";

const VehicleListAssociate = () => {
	const { bikeDetailIndex, bikeList } = BikeDetailApi();

	useEffect(() => {
		bikeDetailIndex();
	}, []);

	// console.log(Object.values(bikeList).map((val) => val.id));

	// console.log(bikeList.map((bike) => 1));
	return (
		<>
			<div className="px-4 sm:px-6 lg:px-4">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<p className="mt-2 text-sm text-gray-700">
							View All Our Bike Detail.
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
											<span className="sr-only">preview</span>
										</th>
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
											Modal
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
											Availability
										</th>
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
										>
											<span className="sr-only">Edit</span>
										</th>
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
												<td className="whitespace-nowrap rounded-full py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													<img
														src={imageUrl + bike.image_path}
														// onClick={}
														className=" h-12 w-auto rounded-xl object-cover "
													/>
												</td>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{bike.category.category_nm}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{bike.brand.brand_nm}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{bike.bike_model}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													$ {bike.rental_fee}{" "}
													<span className="text-xs capitalize">per day</span>
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
													<Link
														to={`/Associate/vehicleUpdate/${bike.id}`}
														className="text-indigo-600 hover:text-indigo-900"
													>
														Edit
													</Link>
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

export default VehicleListAssociate;
