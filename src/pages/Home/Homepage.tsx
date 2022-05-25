import { CSSProperties, useEffect } from "react";

import { GlobeIcon } from "@heroicons/react/solid";

import { documentTitle } from "../../gen/documentConfig";

// Pages Section
import Advertisement from "./Advertisement";
import { ShieldCheckIcon } from "@heroicons/react/outline";

const Homepage = () => {
	//const { notify } = AlertToast();
	useEffect(() => {
		documentTitle("Home");
		//notify();
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
							{/* <div className="">
								<input type="select"  />
							</div>
							<div>
								<input type="select" />
							</div>
							<div>
								<input type="select" />
							</div>
							<div>
								<input type="select" />
							</div> */}
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
