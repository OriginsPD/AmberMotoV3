import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeApi from "../../api/employee/EmployeeApi";
import { documentTitle } from "../../gen/documentConfig";

const Memberpage = () => {
	const { employee } = EmployeeApi();
	useEffect(() => {
		documentTitle("Associate");
	}, []);
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl py-8 px-4 text-center sm:px-6 lg:px-8 lg:py-4">
				<div className="space-y-8 sm:space-y-12">
					<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
							Our Associates
						</h2>
						<p className="text-xl text-gray-500">
							Take a Look at Our Associate Member Who are Committed to deliver
							world className service
						</p>
					</div>
					<div
						role="list"
						className="mx-auto grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3"
					>
						{Object.values(employee).map((associate) => (
							<div key={associate.id} className="col-span-1">
								<div
									role="listitem"
									className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:mx-3 lg:w-2/5 xl:w-full xl:max-w-sm"
								>
									<div className="overflow-hidden rounded bg-white shadow-md">
										<div className="absolute -mt-20 flex w-full justify-center">
											<div className="h-32 w-32">
												<img
													src={`https://ui-avatars.com/api/?background=ff6600&color=fff&name=${associate.user.username}`}
													alt="Display Picture of Silene Tokyo"
													role="img"
													className="h-full w-full rounded-full object-cover shadow-md"
												/>
											</div>
										</div>
										<div className="mt-16 px-6">
											<h1 className="mb-1 text-center text-3xl font-bold">
												{associate.user.username}
											</h1>
											<p className="text-center text-sm text-gray-800">
												{associate.user.email}
											</p>
											<p className="pt-3 text-center text-base font-normal text-gray-600">
												{associate.user.personal_detail?.address ??
													"Some Address PlaceHolder"}
											</p>
											<div className="flex w-full justify-center pt-5 pb-5">
												<a
													href={`mailto:${associate.user.email}`}
													className="mx-5"
												>
													<MailIcon className=" h-8 w-auto text-gray-500" />
												</a>
												<Link
													to={`/memberCatalogue/${associate.id}`}
													className="mx-5"
												>
													<PlayIcon className=" h-8 w-auto text-orange-500 hover:animate-ping" />
												</Link>
												<a
													href={`tel:+${associate.user.personal_detail?.phone_number}`}
													className="mx-5"
												>
													<PhoneIcon className=" h-8 w-auto text-gray-500" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Memberpage;
