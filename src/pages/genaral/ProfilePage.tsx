import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useUserInfo from "../../components/hooks/useUserInfo";

const ProfilePage = () => {
	const { pathname } = useLocation();
	const { authInfo } = useUserInfo();

	// console.log(pathname);
	return (
		<Fragment>
			<div className="space-y-4">
				<div className="my-1 md:flex md:items-center md:justify-between md:space-x-5">
					<div className="flex items-start space-x-5">
						<div className="flex-shrink-0">
							<div className="relative">
								<img
									className="h-16 w-16 rounded-full"
									src={`https://ui-avatars.com/api/?background=ff6600&color=fff&name=${authInfo?.username}`}
									alt=""
								/>

								<span
									className="absolute inset-0 rounded-full shadow-inner"
									aria-hidden="true"
								/>
							</div>
						</div>
						{/*
                          Use vertical padding to simulate center alignment when both lines of text are one line,
                          but preserve the same layout if the text wraps without making the image jump around.
                        */}
						<div className="pt-1.5">
							<h1 className="text-2xl font-bold text-gray-900">
								{authInfo?.username}
							</h1>
							<p className="text-sm font-medium text-gray-500">
								Joined as an{" "}
								<a href="#" className="text-gray-900">
									Associate Member
								</a>{" "}
								on{" "}
								{/* <time dateTime="2020-08-25">
									{new Date(authInfo?.created_at).toLocaleDateString(
										"Jamaica",
										{
											month: "long",
											day: "2-digit",
											year: "2-digit",
										}
									)}
								</time> */}
							</p>
						</div>
					</div>
					<div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
						<NavLink
							to={`${
								pathname == "/Admin/profile"
									? "/Admin/setting"
									: "/Associate/setting"
							}`}
							className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
						>
							Setting
						</NavLink>
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
						>
							Deactivate
						</button>
					</div>
				</div>
				<div className="overflow-hidden bg-white  sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Associate Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							Personal details and application.
						</p>
					</div>
					<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
						<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
							<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500">Full name</dt>
								<dd className="mt-1 text-sm text-gray-900">
									{authInfo?.username}
								</dd>
							</div>
							<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500">Position</dt>
								<dd className="mt-1 text-sm text-gray-900">
									{pathname == "/Associate/profile"
										? "Associate Member"
										: "Administrator"}
								</dd>
							</div>
							<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500">
									Email address
								</dt>
								<dd className="mt-1 text-sm text-gray-900">
									{authInfo?.email}
								</dd>
							</div>
							{/* <div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500">
									Salary expectation
								</dt>
								<dd className="mt-1 text-sm text-gray-900">$120,000</dd>
							</div> */}
							<div className="sm:col-span-2">
								<dt className="text-sm font-medium text-gray-500">Address</dt>
								<dd className="mt-1 w-8/12 truncate text-sm text-gray-900">
									{authInfo?.personal_detail.address}
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProfilePage;
