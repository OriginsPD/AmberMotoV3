import { NavLink } from "react-router-dom";

import { CheckIcon, MailIcon, UserAddIcon } from "@heroicons/react/outline";
import React, { Fragment, useEffect, useState } from "react";

import EmployeeApi, { EmployeeList } from "../../api/employee/EmployeeApi";
import { EmployeeProps } from "../../constants/ApiConfig";

import ReactPaginate from "react-paginate";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import RaceLoader from "../../components/loader/RaceLoader";
import CheckBox from "../../components/inputElement/CheckBox";
import useToggle from "../../components/hooks/useToggle";
import DescriptionModal from "../../components/Modal/DescriptionModal";

const PendingTable = () => {
	const { EmployeeUpdate } = EmployeeApi();
	const { isOpen, closeModal, toggleModal } = useToggle();
	const [pageCount, setPageCount] = useState(0);
	const [currentEmployee, setCurrentEmployee] = useState<EmployeeProps[]>(
		{} as EmployeeProps[]
	);

	const [selected, setSelected] = useState<number[]>([]);

	const ActiveEmployee = () => {
		EmployeeUpdate(selected);
	};

	// Multiple Check

	const checkAll = () => {
		if (selected.length == employee.length) {
			setSelected([]);
		} else {
			setSelected(() => employee.map((value) => value.id));
		}
		console.log(selected);
	};

	// Single Check

	const onCheck = (id: number) => {
		selected.includes(id)
			? setSelected(() => selected.filter((value) => value !== id))
			: setSelected([...selected, id]);
		console.log(selected);
	};

	const { employee, isLoaded, employeePending } = EmployeeList();

	useEffect(() => {
		setPageCount(Math.ceil(Object.keys(employeePending).length / 5 - 1));
		setCurrentEmployee(Object.values(employeePending).slice(5, 10));
	}, [employeePending]);

	const handleClick = async (data: { selected: any }) => {
		let currentPage = data.selected + 1;

		// console.log(currentPage);
		let firstPageIndex = currentPage * 5;
		let lastPageIndex = firstPageIndex + 5;

		setCurrentEmployee(
			Object.values(employeePending).slice(firstPageIndex, lastPageIndex)
		);

		// console.log(currentEmployee);
	};
	return (
		<Fragment>
			<DescriptionModal isOpen={isOpen} closeModal={closeModal} />
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="border-b border-gray-200 py-2 pb-5 sm:flex sm:items-center sm:justify-between">
					<h1 className="text-xl font-semibold text-gray-900">
						New Associate Applicants
					</h1>
					<div className="mt-3 flex sm:mt-0 sm:ml-4">
						{/* <button
							type="button"
							className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<MailIcon className="h-5 w-auto pr-2" />
							Email
						</button> */}
						{selected.length != 0 ? (
							<button
								type="button"
								onClick={ActiveEmployee}
								className="ml-3 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
							>
								<CheckIcon className="h-5 w-auto pr-2" />
								Active
							</button>
						) : null}
					</div>
				</div>

				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<table className="min-w-full divide-y divide-gray-300">
								<thead className="table-header-group">
									<tr>
										<th
											scope="col"
											className="relative py-3.5  pr-3 text-left sm:pr-6 md:pr-0"
										>
											<div className="flex h-5 items-center">
												<input
													id="checkAll"
													name="checkAll"
													onChange={checkAll}
													checked={
														selected.length == employee.length ? true : false
													}
													type="checkbox"
													className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
												/>
											</div>
										</th>
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
											Email
										</th>
										<th
											scope="col"
											className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
										>
											Address
										</th>

										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
										>
											<span className="sr-only">active</span>
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
									) : Object.keys(employee).length == 0 ? (
										<tr>
											<td>No Employee Found</td>
										</tr>
									) : (
										Object.values(currentEmployee).map((person) => (
											<tr key={person.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													<CheckBox
														id={person.id}
														onCheck={onCheck}
														selected={selected}
													/>
												</td>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{person.user.username}
												</td>
												<td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
													{person.user.email}
												</td>
												<td className=" whitespace-nowrap break-words py-4 px-3 text-sm text-gray-500">
													{person.user.personal_detail?.address ??
														"No Address Added"}
												</td>

												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
													<button
														onClick={toggleModal}
														className="text-indigo-600 hover:text-indigo-900"
													>
														View<span className="sr-only">, {person.id}</span>
													</button>
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>

						<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
							<div className="hidden w-full py-4 sm:flex sm:flex-1 sm:items-center sm:justify-center">
								<div>
									<ReactPaginate
										previousLabel={<ChevronLeftIcon className="h-5 w-auto" />}
										nextLabel={<ChevronRightIcon className="h-5 w-auto" />}
										breakLabel={"..."}
										pageCount={pageCount}
										marginPagesDisplayed={1}
										pageRangeDisplayed={2}
										onPageChange={handleClick}
										className="flex space-x-2"
										activeClassName="bg-blue-400 text-white mx-2 "
										nextLinkClassName="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
										previousClassName="mr-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
										breakClassName="relative hidden rounded-md mx-2 items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:text-white hover:bg-blue-400 md:inline-flex"
										pageClassName="relative z-0 inline-flex rounded-md mx-1 -space-x-px  shadow-sm"
										pageLinkClassName="relative rounded-md hidden items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:text-white hover:bg-blue-400 md:inline-flex"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PendingTable;
