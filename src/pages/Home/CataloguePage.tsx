import { useEffect } from "react";
import CatalogueApi from "../../api/home/CatalogueApi";
import { documentTitle } from "../../gen/documentConfig";

import { imageUrl } from "../../constants/ImageConfig";
import PlusLoader from "../../components/loader/PlusLoader";

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
						{Object.values(vehicleCatalogue).map((vehicle) => (
							<div key={vehicle.id} className="group text-center">
								<div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
									<img
										src={imageUrl + vehicle.image_path}
										alt={""}
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<div className="pb-4 text-left">
									<h3 className="mt-4 text-sm text-gray-700">
										{vehicle.category.category_nm}
									</h3>
									<p className="mt-1 text-lg font-medium text-gray-900">
										{vehicle.bike_model}
									</p>
								</div>
								<button className="bg-red-500 py-2 px-10 text-center text-white  shadow ">
									Rent Now
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default CataloguePage;
