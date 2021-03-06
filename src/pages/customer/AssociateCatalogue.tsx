import { Fragment } from "react";
import { useEffect } from "react";
import CatalogueApi from "../../api/home/CatalogueApi";
import { documentTitle } from "../../gen/documentConfig";

import { imageUrl } from "../../constants/ImageConfig";
import PlusLoader from "../../components/loader/PlusLoader";
import CountUp from "react-countup";
import { Link, useParams } from "react-router-dom";

const AssociateCatalogue = () => {
	const { id } = useParams();
	const { isLoaded, vehicleCatalogue, associate, EmployeeCatalogue } =
		CatalogueApi();

	useEffect(() => {
		documentTitle("Catalogue");
		EmployeeCatalogue(id);
		// index();
	}, []);

	return (
		<Fragment>
			<div className="m-10 border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
				<div className="flex">
					<div className="mr-4 flex-shrink-0">
						<img
							src={`https://ui-avatars.com/api/?background=ff6600&color=fff&name=${associate?.user.username}`}
							className="h-16 w-16 rounded-full border border-gray-300 bg-white text-gray-300"
							alt=""
						/>
					</div>
					<div>
						<h4 className="text-lg font-bold">{associate?.user.username}</h4>
						<p className="mt-1">{associate?.user.email}</p>
						<p className="mt-1">{associate?.user.personal_detail?.address}</p>
					</div>
				</div>
			</div>

			<div className="bg-white">
				{!isLoaded ? (
					<div className="item-center flex justify-center">
						<PlusLoader />
					</div>
				) : Object.keys(vehicleCatalogue).length == 0 ? (
					<div className="flex h-[70vh] w-auto items-center justify-center text-4xl text-gray-500">
						{" "}
						No Bike Have Been Added{" "}
					</div>
				) : (
					<div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
						<h2 className="sr-only">Products</h2>

						<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
							{Object.values(vehicleCatalogue).map((bike) => (
								<div key={bike.id} className="group relative">
									<div className="sm:aspect-w-2 sm:aspect-h-3 h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 ">
										<img
											src={imageUrl + bike.image_path}
											alt={"Image of Latest Bike"}
											className="h-full w-full object-cover object-center transition-all ease-linear group-hover:scale-105"
										/>
									</div>
									<div className="absolute inset-0 z-20 flex h-full w-auto items-end justify-center bg-gradient-to-t from-black/80 to-transparent">
										<div className="w-11/12 flex-col">
											<div className="flex w-auto items-end justify-between">
												<div className="m-5 w-full flex-col items-center text-left text-white">
													<h3 className="mt-4 text-2xl font-semibold ">
														<div className="w-10/12">
															<span className=" inset-0 break-words" />
															{bike.bike_model}
														</div>
													</h3>
													<p className="text-md mt-1 ">
														$
														<CountUp
															start={0}
															end={bike.rental_fee}
															duration={2}
															separator={","}
															decimal={"."}
															decimals={2}
														/>
													</p>
												</div>
											</div>
											<div className=" group m-4  items-end whitespace-nowrap rounded-md border-2 border-white px-8 py-2 text-center group-hover:bg-white">
												<Link
													to={`/product/${bike.id}`}
													className="z-10  text-center font-bold text-white group-hover:text-black"
												>
													Reserve Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default AssociateCatalogue;
