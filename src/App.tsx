import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Document
import { documentBody } from "./gen/documentConfig";

import HomeLayout from "./components/Layouts/HomeLayout";
import AssociateLayout from "./components/Layouts/AssociateLayout";

// Context Provider
import FormContextProvider from "./components/context/FormContext";

// Pages
import Index from "./pages/Associate/Index";
import Homepage from "./pages/Home/Homepage";
import Brandpage from "./pages/Home/Brandpage";
import AuthIndex from "./pages/Home/Auth/AuthIndex";
import Memberpage from "./pages/Home/Memberpage";
import AuthRegister from "./pages/Home/Auth/AuthRegister";
import CataloguePage from "./pages/Home/CataloguePage";
import ClientAssociate from "./pages/Associate/ClientAssociate";
import VehicleListTable from "./pages/Associate/VehicleListTable";
import AuthContextProvider from "./components/context/AuthContext";
import VehicleStatusTable from "./pages/Associate/VehicleStatusTable";

import CheckAuth from "./auth/CheckAuth";
import BikeEdit from "./pages/Associate/BikeEdit";
import Wallet from "./pages/Associate/Wallet";

documentBody();

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<FormContextProvider>
					<Routes>
						{/* <Route element={<CheckAuth />}> */}
						<Route element={<HomeLayout />}>
							<Route path="/" element={<Homepage />} />
							<Route path="/join" element={<AuthIndex />} />
							<Route path="/Auth/:user" element={<AuthRegister />} />
							<Route path="/brands" element={<Brandpage />} />
							<Route path="/catalogues" element={<CataloguePage />} />
							<Route path="/members" element={<Memberpage />} />
						</Route>
						<Route path="/Associate" element={<AssociateLayout />}>
							<Route path="" element={<Index />} />
							<Route path="wallet" element={<Wallet />} />
							<Route path="client" element={<ClientAssociate />} />
							<Route path="vehicleList" element={<VehicleListTable />} />
							<Route path="vehicleStatus" element={<VehicleStatusTable />} />
							<Route path="vehicleUpdate/:id" element={<BikeEdit />} />
						</Route>
						{/* </Route> */}
					</Routes>
				</FormContextProvider>
			</AuthContextProvider>
		</Router>
	);
};

export default App;
