import { useEffect } from "react";
import CatalogueApi from "../../api/home/CatalogueApi";
import { documentTitle } from "../../gen/documentConfig";

import { imageUrl } from "../../constants/ImageConfig";
import PlusLoader from "../../components/loader/PlusLoader";
import CountUp from "react-countup";

const CataloguePage = () => {
	const { index, vehicleCatalogue } = CatalogueApi();

	useEffect(() => {
		documentTitle("Catalogue");
		index();
	}, []);
	return (
		<div className="bg-white">
			{Object.keys(vehicleCatalogue).length == 0 ? (
				<PlusLoader />
			) : (
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="sr-only">Products</h2>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{Object.values(vehicleCatalogue).map((bike) => (
							<div key={bike.id} className="group relative">
								<div className="sm:aspect-w-2 sm:aspect-h-3 h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 ">
									<img
										src={imageUrl + bike.image_path}
										alt={"Image of Latest Bike"}
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="absolute inset-0 z-20 flex h-full w-auto items-end justify-center bg-gradient-to-t from-black/80 to-transparent">
									<div className="w-auto flex-col items-end justify-between">
										<div className="m-5 w-full flex-col text-left text-white">
											<h3 className="mt-4  text-2xl font-semibold ">
												<div>
													<span className="absolute inset-0" />
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

										<div className="z-10 m-2 flex w-full items-end whitespace-nowrap text-center">
											<a
												href={`/${bike.id}`}
												className="rounded-md border-2 border-white px-8 py-2 text-white"
											>
												Reserve Now
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default CataloguePage;
