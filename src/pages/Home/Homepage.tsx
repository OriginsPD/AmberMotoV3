import { CSSProperties, useEffect } from "react";

import { GlobeIcon } from "@heroicons/react/solid";

import { documentTitle } from "../../gen/documentConfig";

// Pages Section
import Advertisement from "./Advertisement";
import { ShieldCheckIcon } from "@heroicons/react/outline";

const divStyle: CSSProperties = {
	clipPath:
		"polygon(100% 100%, 0% 100% , 0% 72%, 1% 72%, 2% 71.96%, 3% 71.88%, 4% 71.8%, 5% 71.72%, 6% 71.56%, 7% 71.4%, 8% 71.24%, 9% 71.04%, 10% 70.8%, 11% 70.56%, 12% 70.32%, 13% 70.04%, 14% 69.72%, 15% 69.4%, 16% 69.04%, 17% 68.68%, 18% 68.32%, 19% 67.92%, 20% 67.48%, 21% 67.08%, 22% 66.64%, 23% 66.16%, 24% 65.72%, 25% 65.24%, 26% 64.76%, 27% 64.24%, 28% 63.72%, 29% 63.24%, 30% 62.72%, 31% 62.16%, 32% 61.64%, 33% 61.12%, 34% 60.56%, 35% 60.04%, 36% 59.52%, 37% 58.96%, 38% 58.44%, 39% 57.88%, 40% 57.36%, 41% 56.84%, 42% 56.32%, 43% 55.84%, 44% 55.32%, 45% 54.84%, 46% 54.36%, 47% 53.88%, 48% 53.44%, 49% 53%, 50% 52.56%, 51% 52.16%, 52% 51.76%, 53% 51.36%, 54% 51%, 55% 50.64%, 56% 50.32%, 57% 50%, 58% 49.72%, 59% 49.48%, 60% 49.2%, 61% 49%, 62% 48.8%, 63% 48.6%, 64% 48.44%, 65% 48.32%, 66% 48.2%, 67% 48.12%, 68% 48.04%, 69% 48%, 70% 48%, 71% 48%, 72% 48.04%, 73% 48.08%, 74% 48.16%, 75% 48.28%, 76% 48.4%, 77% 48.56%, 78% 48.72%, 79% 48.92%, 80% 49.16%, 81% 49.4%, 82% 49.64%, 83% 49.92%, 84% 50.24%, 85% 50.56%, 86% 50.92%, 87% 51.28%, 88% 51.64%, 89% 52.04%, 90% 52.44%, 91% 52.88%, 92% 53.32%, 93% 53.76%, 94% 54.24%, 95% 54.72%, 96% 55.2%, 97% 55.68%, 98% 56.2%, 99% 56.72%, 100% 57.24%)",
};

const Homepage = () => {
	useEffect(() => {
		documentTitle("Home");
	}, []);

	return (
		<>
			<section
				id="top"
				className="h-screen w-screen overflow-hidden bg-orange-700 lg:relative lg:flex lg:justify-between"
			>
				<img
					className="absolute inset-0 top-[4.7rem] h-full w-full overflow-hidden object-cover object-[75%] opacity-25 sm:object-[25%] sm:opacity-100 lg:top-0"
					src="https://cdn.pixabay.com/photo/2021/12/13/09/46/moto-bikes-6867911_960_720.jpg"
					alt="Couple on a bed with a dog"
				/>

				<div className="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-b sm:from-orange-700 sm:to-transparent"></div>

				<div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
					<div
						data-aos="fade-right"
						data-aos-offset="200"
						data-aos-easing="ease-in-sine"
						data-aos-duration="1000"
						className="z-10 max-w-xl text-center sm:text-left"
					>
						<div className="flex space-x-0">
							<h1 className=" px-4 py-2 text-6xl font-extrabold text-white drop-shadow-2xl sm:text-7xl">
								FIND A HIGH QUALITY BIKE MOTOR AND RENT NOW
							</h1>
						</div>

						<p className=" max-w-lg py-4 font-medium  italic drop-shadow sm:text-lg sm:leading-relaxed">
							We simplified bike rentals, so you can focus on what's important
							to you.
						</p>
						<div className="m-6 flex items-center space-x-4">
							<button className=" border-2 border-orange-600 bg-orange-600 px-8 py-3">
								<span className="text-md font-semibold uppercase text-white">
									{" "}
									Reserve Now
								</span>{" "}
							</button>
							<button className="group border-2 border-white bg-white px-10 py-3">
								<span className="text-md font-semibold uppercase text-orange-600">
									{" "}
									About Us
								</span>{" "}
							</button>
						</div>
					</div>
				</div>
				<div className="relative  left-0 hidden lg:block">
					<div className="relative top-5 left-6 mb-9 h-[45rem] w-[45rem] rotate-12 transform overflow-hidden ">
						<img
							data-aos="fade-left"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="1100"
							className=" z-10 h-full w-screen rounded border-[10px] border-white object-cover object-center shadow-2xl"
							alt="hero"
							height="100%"
							loading="lazy"
							src="https://cdn.pixabay.com/photo/2015/09/09/20/11/motorcycle-933022_960_720.jpg"
						/>
					</div>
					<div className="absolute top-10 left-4 mb-9 h-[40rem] w-[40rem] rotate-6 transform overflow-hidden ">
						<img
							data-aos="fade-left"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="2500"
							className=" z-10 h-full w-screen rounded border-[10px] border-white object-cover object-center shadow-2xl"
							alt="hero"
							height="100%"
							loading="lazy"
							src="https://cdn.pixabay.com/photo/2019/10/21/07/38/motorcycle-4565356_960_720.jpg"
						/>
					</div>
				</div>
				<div className="hidden sm:absolute sm:inset-0 sm:bg-gradient-to-t sm:from-white sm:via-orange-700/50 sm:to-transparent lg:block"></div>
			</section>
			<Advertisement />
		</>
	);
};

export default Homepage;
