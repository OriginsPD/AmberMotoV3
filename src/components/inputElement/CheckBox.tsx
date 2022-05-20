type CheckBoxProp = {
	id: number;
	onCheck: (id: number) => void;
	selected: number[];
};

const CheckBox = ({ id, onCheck, selected }: CheckBoxProp) => {
	return (
		<div className="flex h-5 items-center">
			<input
				id={JSON.stringify(id)}
				name="comments"
				type="checkbox"
				onChange={() => onCheck(id)}
				value={id}
				checked={selected.includes(id) ? true : false}
				className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
			/>
		</div>
	);
};

export default CheckBox;
