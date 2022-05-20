import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type BarChartProp = {
	label: string[];
	chartData: number[];
};

const AdminChart = ({ label, chartData }: BarChartProp) => {
	const data = {
		labels: label,
		datasets: [
			{
				label: "# of Votes",
				data: chartData,
				backgroundColor: [
					"rgba(42, 166, 255, 1)",
					"rgba(176, 6, 249, 1)",
					"rgba(211, 255, 94, 0.77)",
					"rgba(56, 65, 184, 0.77)",
					"rgba(239, 43, 56, 0.96)",
				],
				borderColor: [
					"rgba(42, 166, 255, 1)",
					"rgba(176, 6, 249, 1)",
					"rgba(211, 255, 94, 0.77)",
					"rgba(56, 65, 184, 0.77)",
					"rgba(239, 43, 56, 0.96)",
				],
				borderWidth: 2,
			},
		],
	};

	return (
		<>
			<div className="my-2 flex-col bg-gray-50 ">
				<span className="w-full py-3 px-5 text-center text-xl font-extrabold">
					Associate With Most Sales
				</span>
				<Doughnut
					data={data}
					options={{
						responsive: true,
						maintainAspectRatio: true,
					}}
					height={2}
					width={2}
				/>
			</div>
		</>
	);
};

export default AdminChart;
