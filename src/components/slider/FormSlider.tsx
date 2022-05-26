import React, { useEffect } from "react";
import BikeBrandApi from "../../api/bike/BikeBrandApi";
import BikeCategoryApi from "../../api/bike/BikeCategoryApi";
import useForms from "../hooks/useForms";

// Validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
	brand_id: yup.string().required("Please Select a Brand"),
	category_id: yup.string().required("Please Select a Category"),
	rental_fee: yup.string().required("Rental Fee is Required"),
});

const FormSlider = () => {
	const { indexBrand, brands } = BikeBrandApi();
	const { indexCategory, category } = BikeCategoryApi();

	const { state, storeInfo, resetInfo } = useForms();

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
	};

	useEffect(() => {
		indexBrand();
		indexCategory();
	}, []);
	return (
		<div className="z-10 mt-5 h-full md:col-span-2 md:mt-0">
			<div className="overflow-hidden  sm:rounded-md">
				<div className="bg-white px-4 py-5 sm:p-6">
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-full ">
							<label
								htmlFor="country"
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

						<div className="col-span-full">
							<label
								htmlFor="country"
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

						<div className="col-span-full">
							<label
								htmlFor="price"
								className="block text-sm font-medium text-gray-700"
							>
								Rental Fee
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
										JMD
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormSlider;
