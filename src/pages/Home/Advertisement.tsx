import {
	CubeTransparentIcon,
	ShieldCheckIcon,
	FingerPrintIcon,
	ArrowRightIcon,
} from "@heroicons/react/solid";

const Advertisement = () => {
	return (
		<section className="h-screen">
			<div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
					<div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
						<h2 className="text-3xl font-bold sm:text-4xl">
							Find The Motor Cycle of Your Dreams
						</h2>

						<p className="mt-4 text-2xl text-gray-600">
							We simplified bike rentals, so you can focus on what's important
							to you
						</p>

						<a
							className="mt-8 inline-flex items-center rounded border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
							href="/get-started"
						>
							<span className="text-sm font-medium"> Get Started </span>
							<ArrowRightIcon className="ml-3 h-5 w-5 hover:animate-pulse" />
						</a>
					</div>

					<div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
						<div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
							<span className="inline-block rounded-lg bg-gray-50 p-3">
								<CubeTransparentIcon className="h-10 w-10 text-blue-600" />
							</span>

							<h6 className="mt-2 font-bold">Safe Rides</h6>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								Your safety is our priority. From sanitizing all bikes before
								every use, to extensive on-ground safety measures, your rides
								with AmberMotor will always be safe and reliable. We also offer
								helmets on-demand.
							</p>
						</div>

						<div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
							<span className="inline-block rounded-lg bg-gray-50 p-3">
								<ShieldCheckIcon className="h-10 w-10 text-blue-600" />
							</span>

							<h6 className="mt-2 font-bold">Flexible Ownership</h6>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								Enjoy the freedom of owning a two-wheeler without the hefty
								down-payments, EMIs and paperwork. Now choose from rent-to-own,
								monthly/quarterly bookings, and even daily plans.
							</p>
						</div>

						<div className="col-span-full block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
							<span className="inline-block rounded-lg bg-gray-50 p-3">
								<FingerPrintIcon className="h-10 w-10  text-blue-600" />
							</span>

							<h6 className="mt-2 font-bold">AmberMotor Stations</h6>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								Your local AmberMotor Station is here to make ensure your
								two-wheeler experience is flawless. At your neighborhood
								station, you get to pick any bike, get maintenance, sanitized,
								and a lot more.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advertisement;
