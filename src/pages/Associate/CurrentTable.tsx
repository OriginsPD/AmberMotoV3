import DotLoader from "../../components/loader/DotLoader";

type CurrentTableProp = {
	setClientID: React.Dispatch<React.SetStateAction<number>>;
	currentTable: string[] | number[];
	toggleModal: () => void;
};

const CurrentTable = ({
	currentTable,
	toggleModal,
	setClientID,
}: CurrentTableProp) => {
	const viewDetails = (id: number) => {
		setClientID(id);
		toggleModal();
	};
	return (
		<div className="px-4 py-4 sm:px-6 lg:px-8">
			<div className="mt-8 flex flex-col">
				<div className="-my-2 -mx-4 overflow-x-auto scrollbar-hide sm:-mx-6 lg:-mx-4">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
									>
										Username
									</th>
									<th
										scope="col"
										className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>
										Address
									</th>
									{/* <th
										scope="col"
										className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>
										Email
									</th> */}
									<th
										scope="col"
										className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>
										Bike Rented
									</th>
									<th
										scope="col"
										className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>
										Date Rented
									</th>
									<th
										scope="col"
										className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
									>
										Due Date
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
								{Object.keys(currentTable).length === 0 ? (
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
								) : Object.keys(currentTable).length > 0 ? (
									Object.values(currentTable).map((data) => (
										<tr key={data.id}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
												{data.user.username}
											</td>
											<td className="whitespace-nowrap py-4 px-3 text-sm leading-8 text-gray-500">
												{data.user.username}
											</td>
											{/* <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
											{data.user.email}
										</td> */}
											<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
												{data.bike.bike_model}
											</td>
											<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
												{new Date(data.start_date).toLocaleDateString(
													"Jamaica",
													{
														day: "2-digit",
														month: "long",
														year: "2-digit",
													}
												)}
											</td>
											<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
												{new Date(data.end_date).toLocaleDateString("Jamaica", {
													day: "2-digit",
													month: "long",
													year: "2-digit",
												})}
											</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
												<button
													onClick={() => viewDetails(data.id)}
													className="text-indigo-600 hover:text-indigo-900"
												>
													View<span className="sr-only">, View</span>
												</button>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td
											colSpan={6}
											className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-500 sm:pl-6 md:pl-0"
										>
											Not Data Found
										</td>
									</tr>
								)}
								{}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentTable;
