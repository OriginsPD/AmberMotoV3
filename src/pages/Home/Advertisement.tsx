import {
	CubeTransparentIcon,
	ShieldCheckIcon,
	FingerPrintIcon,
	ArrowRightIcon,
} from "@heroicons/react/solid";
import { Fragment, useEffect } from "react";
import CatalogueApi from "../../api/home/CatalogueApi";

import CountUp from "react-countup";

import { imageUrl } from "../../constants/ImageConfig";

const incentives = [
	{
		name: "Free Shipping",
		description:
			"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
		imageSrc:
			"https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
	},
	{
		name: "24/7 Customer Support",
		description:
			"Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
	},
	{
		name: "Fast Shopping Cart",
		description:
			"Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
		imageSrc:
			"https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
	},
];

const features = [
	{ name: "Origin", description: "Designed by Good Goods, Inc." },
	{
		name: "Material",
		description:
			"The overall experience from sign up to going live was nothing less than outstanding. Very knowledgeable and most all human!",
	},
	{ name: "Dimensions", description: '15" x 3.75" x .75"' },
	{
		name: "Finish",
		description:
			"This rental software has really helped us grow our business confidently in the past year. It's incredibly powerful, easy to use and the customer service is top-notch.",
	},
	{
		name: "Includes",
		description:
			"I don't know what I would do without AmberMotor's for my rental business. It keeps me organized and the support teams answers immediately.",
	},
	{
		name: "Considerations",
		description:
			"My experience has been great! Right from the start the AmberMotors team was so accommodating by reaching out more than once.",
	},
];

const Advertisement = () => {
	const { index, vehicleCatalogue } = CatalogueApi();

	useEffect(() => {
		index();
	}, []);

	const latestBike = Object.values(vehicleCatalogue).slice(0, 3);

	console.log(latestBike);

	return (
		<Fragment>
			{/* 3 Random Bike Advertisement */}

			<section>
				<div className="bg-white">
					<div className="mx-auto max-w-7xl py-4 px-4 sm:py-10 sm:px-6 lg:px-8">
						<div className="sm:flex sm:items-baseline sm:justify-between">
							<h2 className="text-8xl font-extrabold tracking-tight text-gray-900">
								NEW ARRIVALS
							</h2>
							<a
								href="#"
								className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
							>
								Browse all favorites<span aria-hidden="true"> &rarr;</span>
							</a>
						</div>

						<div
							data-aos="slide-up"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-once="true"
							data-aos-duration="800"
							className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8"
						>
							{latestBike.map((bike) => (
								<div key={bike.id} className="group relative">
									<div className="sm:aspect-w-2 sm:aspect-h-3 h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:h-auto">
										<img
											src={imageUrl + bike.image_path}
											alt={"Image of Latest Bike"}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<h3 className="mt-4 text-base font-semibold text-gray-900">
										<a href={`/${bike.id}`}>
											<span className="absolute inset-0" />
											{bike.bike_model}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										{bike.rental_fee}
									</p>
								</div>
							))}
						</div>

						<div className="mt-6 sm:hidden">
							<a
								href="#"
								className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
							>
								Browse all favorites<span aria-hidden="true"> &rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Incentive */}
			<section>
				<div className="bg-inherit">
					<div className="mx-auto max-w-7xl py-8 sm:px-2 sm:py-10 lg:px-4">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3">
							{incentives.map((incentive) => (
								<div
									key={incentive.name}
									className="text-center sm:flex sm:text-left lg:block lg:text-center"
								>
									<div className="sm:flex-shrink-0">
										<div className="flow-root">
											<img
												className="mx-auto h-24 w-28"
												src={incentive.imageSrc}
												alt=""
											/>
										</div>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
										<h3 className="text-sm font-medium text-gray-900">
											{incentive.name}
										</h3>
										<p className="mt-2 text-sm text-gray-500">
											{incentive.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Our Values Advisement */}

			<section className="my-4">
				<div className="relative overflow-hidden bg-white">
					<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
						<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
							<div className="sm:max-w-lg">
								<h1 className="font text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
									We Provide Premium Motor Bike With High Quality
								</h1>
								<p className="mt-4 text-xl text-gray-500">
									Whether you are traveling and want to see the sights, or are
									looking for a high performance ride in the back-country, we've
									got your bike.
								</p>
							</div>
							<div>
								<div className="mt-10">
									{/* Decorative image grid */}
									<div
										aria-hidden="true"
										className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
									>
										<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
											<div className="flex items-center space-x-6 lg:space-x-8">
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
														<img
															src="https://cdn.pixabay.com/photo/2021/01/27/15/32/biker-5955268_960_720.jpg"
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src="https://cdn.pixabay.com/photo/2019/09/22/23/12/family-on-scooter-4497192_960_720.jpg"
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
												</div>
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src="https://cdn.pixabay.com/photo/2021/12/14/17/46/motorcycle-6871010_960_720.jpg"
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src="https://cdn.pixabay.com/photo/2020/05/26/20/01/girl-5224613_960_720.jpg"
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src="https://cdn.pixabay.com/photo/2016/10/07/02/54/hang-out-1720604_960_720.jpg"
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
												</div>
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src="https://cdn.pixabay.com/photo/2018/04/15/12/25/competition-3321573_960_720.jpg"
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src="https://cdn.pixabay.com/photo/2016/10/07/02/18/motorbike-1720531_960_720.jpg"
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}

			<section
				data-aos="slide-up"
				data-aos-offset="200"
				data-aos-easing="ease-in-sine"
				data-aos-once="true"
				data-aos-duration="800"
				className="bg-white"
			>
				<div aria-hidden="true" className="relative">
					<img
						src="https://cdn.pixabay.com/photo/2020/10/27/11/48/motorcycle-5690477_960_720.jpg"
						alt=""
						className="h-96 w-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-white" />
				</div>

				<div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
					<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
						<p className="font-bold tracking-widest">LATEST TESTIMONIAL</p>
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							What They Say About Us.
						</h2>
						<p className="mt-4 text-gray-500">
							“This was our first time renting from Royal Cars and we were very
							pleased with the whole experience. Your price was lower than other
							companies. Our rental experience was good from start to finish, so
							we’ll be back in the future lorem ipsum diamet.”
						</p>
					</div>

					<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
						{features.map((feature) => (
							<div key={feature.name} className="border-t border-gray-200 pt-4">
								<div className="flex items-center space-x-3">
									<div className="h-10 w-auto  rounded-full bg-slate-900 p-10"></div>
									<div className="flex-col">
										<dt className="font-medium text-gray-900">
											{feature.name}
										</dt>
										<dd className="mt-2 text-sm text-gray-500">
											{feature.description}
										</dd>
									</div>
								</div>
							</div>
						))}
					</dl>
				</div>
			</section>
		</Fragment>
	);
};

export default Advertisement;
