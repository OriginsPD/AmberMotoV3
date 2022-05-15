import { Link } from "react-router-dom";

const AuthIndex = () => {
	return (
		<div className="h-screen">
			<div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
				<div className="relative flex">
					<img
						src="https://motorcycleshippers.com/wp-content/uploads/2018/06/Rent-Your-Motorcycle.jpg"
						alt=""
						className="absolute inset-0 h-full w-full object-cover object-center"
					/>
					<div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
						<h2 className="text-2xl font-medium text-white text-opacity-75">
							Apply As Associate
						</h2>
						<p className="mt-1 text-lg font-medium text-white">
							Journals and note-takingWise to Share the joy of traveling on Two
							wheels Join Us today as an Associate member and enjoy the benefits
							condition apply.
						</p>
						<Link
							to="/Auth/Associate"
							className="mt-4 rounded-md bg-white py-2.5 px-4 text-sm font-medium text-gray-900 hover:bg-gray-50"
						>
							Apply
						</Link>
					</div>
				</div>
				<div className="relative flex">
					<img
						src="https://cdn.theculturetrip.com/wp-content/uploads/2017/11/motorbike-tigit.jpg"
						alt=""
						className="absolute inset-0 h-full w-full object-cover object-center"
					/>
					<div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
						<h2 className="text-2xl font-medium text-white text-opacity-75">
							Join As Customer
						</h2>
						<p className="mt-1 text-lg font-medium text-white">
							Seeking a funny time but not for a long time join us and gain the
							experience of renting and owning your very own motorcycle
						</p>
						<Link
							to="/Auth/Customer"
							className="mt-4 rounded-md bg-white py-2.5 px-4 text-sm font-medium text-gray-900 hover:bg-gray-50"
						>
							Join
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthIndex;
