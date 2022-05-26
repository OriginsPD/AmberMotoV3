import {
	CurrencyBangladeshiIcon,
	FolderOpenIcon,
	KeyIcon,
	UserGroupIcon,
} from "@heroicons/react/outline";

const Index = () => {
	return (
		<section className="text-gray-600">
			<div className="container mx-auto px-5 py-10">
				<div className="mb-20 flex w-full flex-col text-center">
					<h1 className="mb-6 text-4xl font-extrabold italic leading-tight text-orange-600 md:text-4xl lg:text-5xl">
						Amber<span className=" text-blue-800 ">Motors</span>
					</h1>

					<p className="mx-auto text-base leading-relaxed lg:w-2/3">
						Welcome to AmberMotors! We are the greatest bike rental company in
						Jamaica.
					</p>
				</div>
				<div className="-m-4 flex flex-wrap text-center">
					<div className="w-full p-4 sm:w-1/2 md:w-1/4">
						<div className="cursor-pointer rounded-lg border-2 border-gray-200 px-4 py-6 hover:shadow-2xl">
							<FolderOpenIcon className=" mb-3 inline-block h-12 w-12 text-6xl text-orange-600" />
							<h2 className="title-font text-3xl font-medium text-gray-900">
								20
							</h2>
							<p className="leading-relaxed">Bikes</p>
						</div>
					</div>
					<div className="w-full p-4 sm:w-1/2 md:w-1/4">
						<div className="cursor-pointer rounded-lg border-2 border-gray-200 px-4 py-6 hover:shadow-2xl">
							<UserGroupIcon className="mb-3 inline-block h-12 w-12 text-orange-600" />
							<h2 className="title-font text-3xl font-medium text-gray-900">
								20
							</h2>
							<p className="leading-relaxed">Total Clients</p>
						</div>
					</div>
					<div className="w-full p-4 sm:w-1/2 md:w-1/4">
						<div className="cursor-pointer rounded-lg border-2 border-gray-200 px-4 py-6 hover:shadow-2xl">
							<KeyIcon className="fal fa-key mb-3  inline-block h-12 w-12 text-6xl text-orange-600" />
							<h2 className="title-font text-3xl font-medium text-gray-900">
								50
							</h2>
							<p className="leading-relaxed">Current Rentals </p>
						</div>
					</div>
					<div className="w-full p-4 sm:w-1/2 md:w-1/4">
						<div className="cursor-pointer rounded-lg border-2 border-gray-200 px-4 py-6 hover:shadow-2xl">
							<CurrencyBangladeshiIcon className="mb-3  inline-block h-12 w-12 text-6xl text-orange-600" />
							<h2 className="title-font text-3xl font-medium text-gray-900">
								60
							</h2>
							<p className="leading-relaxed">Total Sales Made</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Index;
