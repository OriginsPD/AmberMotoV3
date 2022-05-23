import { Fragment } from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import EmployeeTable from "./EmployeeTable";
import PendingTable from "./PendingTable";
import InActiveTable from "./InActiveTable";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const people = [
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		email: "lindsay.walton@example.com",
		role: "Member",
	},
	// More people...
];

const Pending = () => {
	const [categories, setCategories] = useState([
		{ name: "Pending Associate" },
		{ name: "InActive Associate" },
	]);

	return (
		<Fragment>
			<div className="w-full max-w-full px-2 py-4 sm:px-0">
				<Tab.Group>
					<Tab.List className="flex space-x-1 border-b ">
						{Object.values(categories).map((category) => (
							<Tab
								key={category.name}
								className={({ selected }) =>
									classNames(
										" py-2.5 px-8 text-sm  font-medium leading-5 text-blue-700",
										"ring-white focus:outline-none ",
										selected
											? "border-b border-blue-400 bg-white"
											: "text-black hover:bg-white/[0.12] hover:text-blue-700"
									)
								}
							>
								{category.name}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="mt-2 w-full">
						<Tab.Panel>
							<PendingTable />
						</Tab.Panel>
						<Tab.Panel>
							<InActiveTable data={people} />
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</Fragment>
	);
};

export default Pending;
