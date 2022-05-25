import { Outlet } from "react-router-dom";
import Footer from "../Routes/Footer";
import Navbar from "../Routes/Navbar";

import AlertToast from "../toast/AlertToast";

const HomeLayout = () => {
	const { AuthSuccess } = AlertToast();

	// AuthSuccess();
	return (
		<div>
			<Navbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default HomeLayout;
