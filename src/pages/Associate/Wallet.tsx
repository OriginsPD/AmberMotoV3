import { useEffect } from "react";
import AmberPayApi from "../../api/payment/AmberPayApi";
import RentalApi from "../../api/rental/RentalApi";
import BarChart from "../../components/charts/BarChart";
import BikeModelEmpty from "../../components/emptyState/BikeModelEmpty";
import DotLoader from "../../components/loader/DotLoader";
import { rentalStatusProp } from "../../constants/ApiConfig";
import PaymentLogTable from "./PaymentLogTable";

import CountUp from "react-countup";
import { Fragment } from "react";
import useUserInfo from "../../components/hooks/useUserInfo";

const Wallet = () => {
	const { statusIndex, rentalStatus } = RentalApi();
	const { index, amount, logInfo } = AmberPayApi();
	const { authInfo } = useUserInfo();

	useEffect(() => {
		index();
		statusIndex();
	}, []);

	let bikeMotorName: string[] = [];
	let bikeMotorValue: number[] = [];

	if (Object.keys(rentalStatus).length > 0) {
		bikeMotorName = Object.values(rentalStatus).map(
			(value) => value.bike_model
		);

		bikeMotorValue = Object.values(rentalStatus).map((value) => value.total);
	}

	return (
		<div className="space-y-8 divide-y">
			<section className="text-gray-700 ">
				<div className="container mx-auto items-center">
					<div className="flex-auto items-center justify-center lg:flex">
						<div className="  flex w-3/4 items-center justify-center  p-2  ">
							{/* <div className="mx-auto">
								<div className=" my-2 flex items-center justify-center  text-center">
									<div>
										<h1 className="mx-auto mb-8 w-full text-2xl font-bold leading-none tracking-tighter text-black lg:text-2xl lg:uppercase">
											Accumulated Income
										</h1>
										<strong className="mx-auto mb-8 flex items-end justify-center text-center text-3xl font-black leading-none lg:text-4xl ">
											<span
												className={`${
													amount == 0 ? "text-red-500" : "text-green-500"
												}`}
											>
												${" "}
												<CountUp
													start={0}
													end={amount}
													duration={2}
													separator={","}
													decimal={"."}
													decimals={2}
												/>
											</span>
										</strong>

										<div className="lading-relaxed mx-auto text-base font-medium capitalize text-gray-700 ">
											Keep Update with Accumulated Income generated from total
											Bike Rentals and fee being pay .{" "}
											<div className="cursor-pointer py-2 text-[0.7em] text-blue-600 hover:underline">
												Service tax is apply affecting total Income
											</div>
										</div>
									</div>
								</div>
							</div> */}

							<Fragment>
								<div className="card mx-auto w-full flex-col items-center justify-center  ">
									<div className="my-2 w-full bg-gray-50 text-center ">
										<h1 className="mx-auto mb-4 w-full text-2xl font-bold leading-none tracking-tighter text-black lg:text-2xl lg:uppercase">
											Accumulated Income
										</h1>
									</div>
									<img
										className="mx-auto mt-20  w-32 rounded-full border-8 border-white"
										src={`https://ui-avatars.com/api/?background=ff6600&color=fff&name=${authInfo?.username}`}
										alt=""
									/>
									<div className="mt-2 text-center text-3xl font-medium">
										{authInfo?.username}
									</div>
									<div className="mt-2 text-center text-sm font-light">
										{authInfo?.email}
									</div>

									<div className="mt-2 px-6 text-center text-3xl font-light">
										<Fragment>
											${" "}
											<CountUp
												start={0}
												end={amount}
												duration={5}
												separator={","}
												decimal={"."}
												decimals={2}
											/>
										</Fragment>
									</div>
									<hr className="mt-8" />
									{/* <div className="flex p-4">
										<div className="w-1/2 text-center">
											<span className="font-bold">1.8 k</span> Total Sales
										</div>
										<div className="w-0 border border-gray-300"></div>
										<div className="w-1/2 text-center">
											<span className="font-bold">2.0 k</span> Bike Owned
										</div>
									</div> */}
								</div>
							</Fragment>
						</div>
						<div className="mx-auto  mt-8 w-full ">
							<div
								className={`h-full ${
									Object.keys(rentalStatus).length == 0 ? "flex" : "flex-col"
								}  items-center justify-center`}
							>
								{Object.keys(rentalStatus).length == 0 ? (
									<DotLoader />
								) : Object.keys(rentalStatus).length > 0 ? (
									<>
										<BarChart
											bikeMotorName={bikeMotorName}
											bikeMotorValue={bikeMotorValue}
										/>
									</>
								) : (
									<BikeModelEmpty />
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="py-8">
				<PaymentLogTable tableDetail={logInfo} />
			</div>
		</div>
	);
};

export default Wallet;
