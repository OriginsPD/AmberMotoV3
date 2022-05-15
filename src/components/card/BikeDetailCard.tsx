import { CheckIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import {
	CashIcon,
	ClockIcon,
	ShieldCheckIcon,
	StatusOnlineIcon,
	XCircleIcon,
} from "@heroicons/react/outline";

import { BikeDetailProp } from "../../constants/ApiConfig";

const product = {
	name: "Everyday Ruck Snack",
	href: "#",
	price: "$220",
	description:
		"Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
	imageSrc:
		"https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
	imageAlt:
		"Model wearing light green backpack with black canvas straps and front zipper pouch.",
	breadcrumbs: [
		{ id: 1, name: "Travel", href: "#" },
		{ id: 2, name: "Bags", href: "#" },
	],
	sizes: [
		{ name: "18L", description: "Perfect for a reasonable amount of snacks." },
		{ name: "20L", description: "Enough room for a serious amount of snacks." },
	],
};
const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

type BikeDetailCardProps = {
	query: BikeDetailProp;
};

const BikeDetailCard = ({ query }: BikeDetailCardProps) => {
	// console.log(query?.penalties);
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl py-8 px-4 sm:py-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				{/* Product details */}
				<div className="lg:max-w-lg lg:self-end">
					<div className="mt-4">
						<h2 className="title-font text-sm tracking-widest text-gray-500">
							{query?.user?.username}
						</h2>
						<h1 className="title-font mb-2 text-3xl font-medium text-gray-900">
							{query?.bike?.brand?.brand_nm}
						</h1>
						<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							{query?.bike?.bike_model}
						</h1>
					</div>

					<section aria-labelledby="information-heading" className="mt-4">
						<h2 id="information-heading" className="sr-only">
							Product information
						</h2>

						<div className="flex items-center">
							<p className="text-lg text-gray-900 sm:text-xl">
								{query?.bike.rental_fee.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</p>
						</div>

						<div className="mt-4 space-y-2">
							<div className="text-xl font-bold italic text-gray-600">
								Address
							</div>
							<p className="text-base text-gray-500">{product.description}</p>
						</div>

						<div className="mt-6 space-y-4">
							<div className=" flex items-center">
								<StatusOnlineIcon
									className="h-5 w-5 flex-shrink-0 text-green-500"
									aria-hidden="true"
								/>
								<p className="ml-2 flex text-sm text-gray-500">
									Payment Status:{" "}
									{query?.payment_status ? (
										<CheckIcon className="ml-2 h-5 w-5 text-green-500" />
									) : (
										<XCircleIcon className="ml-2 h-5 w-5 text-red-500" />
									)}
								</p>
							</div>
							<div className=" flex items-center">
								<CashIcon
									className="h-5 w-5 flex-shrink-0 text-green-500"
									aria-hidden="true"
								/>
								<p className="ml-2 text-sm text-gray-500">
									Penalty Fee: $ {query?.penalties?.amount ?? 0}
								</p>
							</div>
							<div className=" flex items-center">
								<ClockIcon
									className="h-5 w-5 flex-shrink-0 text-green-500"
									aria-hidden="true"
								/>
								<p className="ml-2 text-sm text-gray-500">
									{new Date(query?.start_date).toLocaleDateString("Jamaica", {
										day: "2-digit",
										month: "short",
										year: "numeric",
									})}
								</p>
							</div>
							<div className=" flex items-center">
								<ClockIcon
									className="h-5 w-5 flex-shrink-0 text-red-500"
									aria-hidden="true"
								/>
								<p className="ml-2 text-sm text-gray-500">
									{new Date(query?.end_date).toLocaleDateString("Jamaica", {
										day: "2-digit",
										month: "short",
										year: "numeric",
									})}
								</p>
							</div>
						</div>
					</section>
				</div>

				{/* Product image */}
				<div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
					<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
						<img
							src={product.imageSrc}
							alt={product.imageAlt}
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BikeDetailCard;
