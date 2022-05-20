import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import {
	OfficeBuildingIcon,
	UsersIcon,
	CashIcon,
} from "@heroicons/react/outline";

import EmployeeTable from "./EmployeeTable";

const stats = [
	{
		id: 1,
		name: "Avg. Clients",
		stat: "71,897",
		icon: UsersIcon,
		change: "122",
		changeType: "increase",
	},
	{
		id: 2,
		name: "Avg. Associate",
		stat: "58.16%",
		icon: OfficeBuildingIcon,
		change: "5.4%",
		changeType: "increase",
	},
	{
		id: 3,
		name: "Avg. Rentals",
		stat: "24.57%",
		icon: CashIcon,
		change: "3.2%",
		changeType: "decrease",
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
	return (
		<div className="space-y-10 divide-y">
			<div>
				<h3 className="text-lg font-medium leading-6 text-gray-900">
					Last 30 days
				</h3>
				<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{stats.map((item) => (
						<div
							key={item.id}
							className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
						>
							<dt>
								<div className="absolute rounded-md bg-indigo-500 p-3">
									<item.icon
										className="h-6 w-6 text-white"
										aria-hidden="true"
									/>
								</div>
								<p className="ml-16 truncate text-sm font-medium text-gray-500">
									{item.name}
								</p>
							</dt>
							<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
								<p className="text-2xl font-semibold text-gray-900">
									{item.stat}
								</p>

								<div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
									<div className="text-sm">
										<a
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											{" "}
											View all
											<span className="sr-only"> {item.name} stats</span>
										</a>
									</div>
								</div>
							</dd>
						</div>
					))}
				</dl>
			</div>
			<EmployeeTable />
		</div>
	);
};

export default Dashboard;
