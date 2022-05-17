import RaceLoader from "../../components/loader/RaceLoader";
import { LogState } from "../../constants/ApiConfig";

type PaymentLogTableProps = {
	tableDetail: LogState[];
};

const PaymentLogTable = ({ tableDetail }: PaymentLogTableProps) => {
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

	// console.log(tableDetail);
	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							Income From Past Rentals
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							A list of all the users in your account including their name,
							title, email and role.
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
											Customer
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
											Total Payed
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Percentage
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Date Logged
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									{Object.keys(tableDetail).length == 0 ? (
										<tr>
											<td
												colSpan={5}
												className="whitespace-nowrap py-4 px-3 text-sm tracking-wide text-gray-500"
											>
												<div className="flex w-full items-center justify-center py-4">
													<RaceLoader />
												</div>
											</td>
										</tr>
									) : (
										Object.values(tableDetail).map((form) => (
											<tr key={form.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{form.rental?.user?.username}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm tracking-wide text-gray-500">
													{form.rental?.bike.bike_model}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{formatter.format(form.fee_paid)}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm tracking-wide text-gray-500">
													{form.percentage_earn * 100} %
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{new Date(form.created_at).toLocaleDateString(
														"Jamaica",
														{
															day: "2-digit",
															month: "short",
															year: "numeric",
														}
													)}
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

export default PaymentLogTable;
