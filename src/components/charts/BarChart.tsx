import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type BarChartProp = {
	bikeMotorName: string[];
	bikeMotorValue: number[];
};

const BarChart = ({ bikeMotorName, bikeMotorValue }: BarChartProp) => {
	const data = {
		labels: bikeMotorName,
		datasets: [
			{
				label: "# of Votes",
				data: bikeMotorValue,
				backgroundColor: [
					"rgba(255, 99, 132, 5)",
					"rgba(54, 162, 235, 5)",
					"rgba(255, 206, 86, 5)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 2,
			},
		],
	};

	return (
		<>
			<div className="my-2 flex bg-gray-50 ">
				<span className="w-full py-3 font-extrabold px-5 text-center text-xl">
					Popular Bike Model
				</span>
			</div>
			<Doughnut data={data} height={80} width={80} />
		</>
	);
};

export default BarChart;
