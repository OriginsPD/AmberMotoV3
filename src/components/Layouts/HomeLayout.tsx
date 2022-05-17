import { Outlet } from "react-router-dom";
import Footer from "../Routes/Footer";
import Navbar from "../Routes/Navbar";

const HomeLayout = () => {
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
