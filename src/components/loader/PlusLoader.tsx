import { Ping } from "@uiball/loaders";

const PlusLoader = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<Ping size={80} speed={2} color="blue" />
		</div>
	);
};

export default PlusLoader;
