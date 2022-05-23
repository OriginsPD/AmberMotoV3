import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import {
	OfficeBuildingIcon,
	UsersIcon,
	CashIcon,
} from "@heroicons/react/outline";

import EmployeeTable from "./EmployeeTable";
import { calculateAvg } from "../../api/stats/StatsApi";
import CountUp from "react-countup";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
	const { RentalCount, associateCount, clientCount, userCount } =
		calculateAvg();
	const stats = [
		{
			id: 1,
			name: "Avg. Clients",
			stat: ((clientCount + userCount) / 2).toFixed(2) + " %",
			icon: UsersIcon,
		},
		{
			id: 2,
			name: "Avg. Associate",
			stat: ((associateCount + userCount) / 2).toFixed(2) + " %",
			icon: OfficeBuildingIcon,
		},
		{
			id: 3,
			name: "Total. Rentals",
			stat: RentalCount,
			icon: CashIcon,
		},
	];

	return (
		<div className="space-y-10 divide-y">
			<div>
				<h3 className="text-lg font-medium leading-6 text-gray-900">
					Statistics
				</h3>
				<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{stats.map((item) => (
						<div
							key={item.id}
							className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-2 shadow sm:px-6 sm:pt-6"
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
