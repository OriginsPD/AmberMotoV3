import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Api
import BikeBrandApi from "../../api/bike/BikeBrandApi";
import BikeCategoryApi from "../../api/bike/BikeCategoryApi";
import BikeDetailApi from "../../api/bike/BikeDetailApi";

// Hooks
import useForms from "../../components/hooks/useForms";

// Validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CloudUploadIcon } from "@heroicons/react/outline";

const schema = yup.object({
	brand_id: yup.string().required("Please Select a Brand"),
	category_id: yup.string().required("Please Select a Category"),
	rental_fee: yup
		.string()
		.min(4, "Rental Fee must be $ 500 or more")
		.max(4, "Rental Fee must be $ 99999 or less"),
	bike_model: yup.string().required("Please Enter Bike Modal"),
});

const BikeEdit = () => {
	const id = useParams();
	const { indexCategory, category } = BikeCategoryApi();
	const { indexBrand, brands } = BikeBrandApi();

	const { BikeFind, BikeUpdate } = BikeDetailApi();

	const { state, storeInfo, resetInfo } = useForms();

	const [preview, setPreview] = useState<any>();
	const [selected, setSelectedFile] = useState<File>();

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// const files = (event.target as HTMLInputElement).files || [];

		const fileVal: FileList | null = event.target.files;
		// setSelectedFile(value);

		// storeImage(fileVal);
		setPreview("");

		if (fileVal) {
			setSelectedFile(fileVal?.[0]);
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					setPreview(reader.result);
				}
			};
			reader.readAsDataURL(fileVal?.[0]);
		}
	};

	const {
		register,
		handleSubmit,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const clearForm = () => {
		clearErrors();
		reset(state);
		resetInfo();
		setPreview("");
	};

	const onSubmit = () => {
		BikeUpdate(id.id, selected);
	};

	useEffect(() => {
		indexBrand();
		indexCategory();
		BikeFind(id.id);
	}, []);
	return (
		<div className="mt-10 sm:mt-0">
			<div className="md:grid md:grid-cols-3 md:gap-6">
				<div className="md:col-span-1">
					<div className="px-4 sm:px-0">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Edit Bike Information
						</h3>
						<p className="mt-1 text-sm capitalize text-gray-600">
							Edit Bike Information and detail.
						</p>
					</div>
				</div>
				<div className="mt-5 md:col-span-2 md:mt-0">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="overflow-hidden shadow sm:rounded-md">
							<div className="bg-white px-4 py-5 sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3 lg:col-span-3">
										<label
											htmlFor="brand_id"
											className="block text-sm font-medium text-gray-700"
										>
											Brands
										</label>
										<select
											id="brand"
											{...register("brand_id", {
												onChange: storeInfo,
											})}
											value={state.brand_id}
											className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										>
											<option value=""> Please Select Brand </option>
											{brands.map((value) => (
												<option key={value.id} value={value.id}>
													{value.brand_nm}
												</option>
											))}
										</select>
									</div>

									<div className="col-span-6 sm:col-span-3 lg:col-span-3">
										<label
											htmlFor="category"
											className="block text-sm font-medium text-gray-700"
										>
											Category
										</label>
										<select
											id="category"
											{...register("category_id", {
												onChange: storeInfo,
											})}
											value={state.category_id}
											className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										>
											<option value=""> Please Select Category </option>
											{category.map((value) => (
												<option key={value.id} value={value.id}>
													{value.category_nm}
												</option>
											))}
										</select>
									</div>

									<div className="col-span-6 sm:col-span-3 lg:col-span-full">
										<label
											htmlFor="bike_model"
											className="block text-sm font-medium text-gray-700"
										>
											Model Information
										</label>
										<input
											id="bike_model"
											type="text"
											{...register("bike_model", {
												onChange: storeInfo,
											})}
											value={state.bike_model}
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label
											htmlFor="rental_fee"
											className="block text-sm font-medium text-gray-700"
										>
											Rental Fee Information
										</label>
										<div className="relative mt-1 rounded-md shadow-sm">
											<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
												<span className="text-gray-500 sm:text-sm">$</span>
											</div>
											<input
												id="rental_fee"
												type="number"
												{...register("rental_fee", {
													onChange: storeInfo,
												})}
												value={state.rental_fee}
												className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												placeholder="0.00"
												aria-describedby="price-currency"
											/>
											<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
												<span
													className="text-gray-500 sm:text-sm"
													id="price-currency"
												>
													USD
												</span>
											</div>
										</div>
									</div>

									<div className="col-span-full flex space-x-2">
										{preview ? (
											<div className="h-40 w-full border ">
												<label
													htmlFor="Upload"
													className="block text-center text-sm font-medium text-gray-700"
												>
													<img
														className="inline-block h-40 w-[80%]  object-fill ring-2 ring-white"
														src={preview}
														alt=""
													/>
												</label>
											</div>
										) : (
											<div className={`col-span-full w-full `}>
												<label className="block text-right text-sm font-medium text-gray-700">
													Upload Photo
												</label>
												<div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
													<div className="space-y-1 text-center">
														<div className="flex text-sm text-gray-600">
															<label
																htmlFor="Upload"
																className="flex w-full items-center justify-center text-center"
															>
																<CloudUploadIcon className="mx-auto h-12 w-12 cursor-pointer text-center text-gray-400 hover:text-blue-500" />
															</label>
														</div>
														<p className="text-xs text-gray-500">
															PNG, JPG, GIF up to 10MB
														</p>
													</div>
												</div>
											</div>
										)}
										<input
											id="Upload"
											{...register("fileUpload")}
											type="file"
											onChange={changeHandler}
											className="sr-only"
										/>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
								<button
									type="submit"
									className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
								>
									Update
								</button>
							</div>
						</div>
					</form>
					{Object.keys(errors).length === 0 ? null : (
						<div className="mt-4 rounded-md bg-gray-50 p-5 ">
							<div className="flex">
								<div className="flex-shrink-0">
									<svg
										className="h-5 w-5 text-red-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
								<div className="ml-3">
									<h3 className="text-sm font-medium text-red-800">
										There were {Object.keys(errors).length} errors with your
										submission
									</h3>
									<div className="mt-2 text-sm text-red-700">
										<ul role="list" className="list-disc space-y-1 pl-5">
											{errors.brand_id && <li> {errors.brand_id?.message} </li>}
											{errors.category_id && (
												<li> {errors.category_id?.message} </li>
											)}
											{errors.rental_fee && (
												<li> {errors.rental_fee?.message} </li>
											)}
											{errors.bike_model && (
												<li> {errors.bike_model?.message} </li>
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BikeEdit;
