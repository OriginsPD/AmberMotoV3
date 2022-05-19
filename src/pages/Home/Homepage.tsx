import { CSSProperties, useEffect } from "react";

import { GlobeIcon } from "@heroicons/react/solid";

import { documentTitle } from "../../gen/documentConfig";

// Pages Section
import Advertisement from "./Advertisement";

const divStyle: CSSProperties = {
	clipPath: "polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0, 46% 0)",
};

const Homepage = () => {
	useEffect(() => {
		documentTitle("Home");
	}, []);
	return (
		<>
			<section
				className="h-screen w-screen overflow-hidden bg-blue-800/50 lg:relative lg:flex lg:justify-between "
				style={divStyle}
			>
				<img
					className="absolute inset-0 top-[4.7rem] h-full w-full overflow-hidden object-cover object-[75%] opacity-25 sm:object-[25%] sm:opacity-100 lg:top-0"
					src="https://cdn.pixabay.com/photo/2021/12/13/09/46/moto-bikes-6867911_960_720.jpg"
					alt="Couple on a bed with a dog"
				/>

				<div className="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-r sm:from-blue-800 sm:to-transparent"></div>

				<div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
					<div className="max-w-xl text-center sm:text-left">
						<div className="flex space-x-0">
							<GlobeIcon className="rounded-l-full bg-orange-500 px-2 text-white drop-shadow-xl lg:h-24 lg:w-24 " />
							<h1 className="rounded-r-full bg-white px-4 py-2 text-6xl font-extrabold italic text-blue-700 drop-shadow-xl sm:text-7xl">
								AmberMotor
							</h1>
						</div>

						<p className="text-bold mt-4 max-w-lg italic text-white drop-shadow sm:text-2xl sm:leading-relaxed">
							We simplified bike rentals, so you can focus on what's important
							to you.
						</p>
					</div>
				</div>
				<div className="relative  left-0 hidden lg:block">
					<div className="relative top-5 left-6 mb-9 h-[45rem] w-[45rem] rotate-12 transform overflow-hidden border-8 border-b-8 border-white shadow-2xl">
						<img
							className=" z-10 h-full w-screen rounded object-cover object-center"
							alt="hero"
							height="100%"
							loading="lazy"
							src="https://cdn.pixabay.com/photo/2015/09/09/20/11/motorcycle-933022_960_720.jpg"
						/>
					</div>
					<div className="absolute top-10 left-4 mb-9 h-[40rem] w-[40rem] rotate-6 transform overflow-hidden border-8 border-b-8 border-white shadow-2xl">
						<img
							className=" z-10 h-full w-screen rounded object-cover object-center"
							alt="hero"
							height="100%"
							loading="lazy"
							src="https://cdn.pixabay.com/photo/2019/10/21/07/38/motorcycle-4565356_960_720.jpg"
						/>
					</div>
				</div>
			</section>
			<Advertisement />
		</>
	);
};

export default Homepage;
