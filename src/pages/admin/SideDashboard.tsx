import { Fragment } from "react";
import BrandList from "./BrandList";
import CategoryList from "./CategoryList";

const SideDashboard = () => {
	return (
		<Fragment>
			<div className="space-y-4">
				<div className="border p-4">
					<BrandList />
				</div>
				<div className="border p-4">
					<CategoryList />
				</div>
			</div>
		</Fragment>
	);
};

export default SideDashboard;
