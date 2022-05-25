import { useEffect, useState } from "react";

// Icons
import {
	CheckIcon,
	QuestionMarkCircleIcon,
	RefreshIcon,
	StarIcon,
} from "@heroicons/react/solid";
import {
	BanIcon,
	ExclamationCircleIcon,
	ShieldCheckIcon,
} from "@heroicons/react/outline";

import { Link, useParams } from "react-router-dom";

// Api
import BikeDetailApi from "../../api/bike/BikeDetailApi";

// Date Picker
import DatePicker from "react-date-picker";

import { imageUrl } from "../../constants/ImageConfig";

// Count Op
import CountUp from "react-countup";
import useForms from "../../components/hooks/useForms";

const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const ProductPage = () => {
	const [collectDate, setCollectDate] = useState<string>(
		JSON.stringify(new Date())
	);
	const [loaded, setLoaded] = useState(false);
	const { id } = useParams();

	const { storeInfo } = useForms();

	const { BikeShow, product } = BikeDetailApi();

	useEffect(() => {
		BikeShow(id);
	}, []);

	// console.log(product?.bike_model);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				{/* Product details */}
				<div className="lg:max-w-lg lg:self-end">
					<div className="mt-4">
						<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							{product?.bike_model}
						</h1>
					</div>

					<section aria-labelledby="information-heading" className="mt-4">
						<h2 id="information-heading" className="sr-only">
							Product information
						</h2>

						<div className="flex items-center">
							<p className="text-lg text-gray-900 sm:text-xl">
								${" "}
								<CountUp
									start={0}
									end={product?.rental_fee ? product?.rental_fee : 0}
									duration={2}
									separator={","}
									decimal={"."}
									decimals={2}
								/>
							</p>

							<div className="ml-4 border-l border-gray-300 pl-4">
								<h2 className="sr-only">Reviews</h2>
								<div className="flex items-center">
									<div>
										<div className="flex items-center">
											{[0, 1, 2, 3, 4].map((rating) => (
												<StarIcon
													key={rating}
													className={classNames(
														reviews.average > rating
															? "text-yellow-400"
															: "text-gray-300",
														"h-5 w-5 flex-shrink-0"
													)}
													aria-hidden="true"
												/>
											))}
										</div>
										<p className="sr-only">{reviews.average} out of 5 stars</p>
									</div>
									<p className="ml-2 text-sm text-gray-500">
										{reviews.totalCount} reviews
									</p>
								</div>
							</div>
						</div>

						<div className="mt-4 space-y-6">
							<dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
								<div>
									<dt className="font-medium text-gray-900">Pickup Address</dt>
									<dd className="mt-2">
										<address className="not-italic">
											<span className="block">Kristin Watson</span>
											<span className="block">7363 Cynthia Pass</span>
											<span className="block">Toronto, ON N3Y 4H8</span>
										</address>
									</dd>
								</div>
								<div>
									<dt className="font-medium text-gray-900">
										Accepted Payment Methods
									</dt>

									{/* Payment Icons */}
									<dd className="mt-2 items-center space-y-2 sm:flex  sm:space-y-0 sm:space-x-4">
										<div className="flex-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="100px"
												height="60px"
												className="h-10 w-auto rounded-md shadow-md"
												viewBox="0 0 100 60"
												version="1.1"
											>
												<title>Payment/Stripe/Stripe-card-dark</title>
												<desc>Created with Sketch.</desc>
												<defs />
												<g
													id="Icons:-Payment"
													stroke="none"
													strokeWidth="1"
													fill="none"
													fillRule="evenodd"
												>
													<g id="Stripe-card-dark">
														<g id="Payment/Stripe/Stripe-card-dark">
															<rect
																id="Rectangle"
																fill="#008CDD"
																x="0"
																y="0"
																width="100"
																height="60"
																rx="4"
															/>
															<path
																d="M25.4960774,28.7000691 C24.1610199,28.2021968 23.429365,27.8149628 23.429365,27.2064521 C23.429365,26.6900479 23.8500597,26.3950585 24.599958,26.3950585 C25.9716394,26.3950585 27.3798075,26.9298564 28.3491748,27.4091968 L28.8978473,23.9979415 C28.1297058,23.6291011 26.5567987,23.0205904 24.3804889,23.0205904 C22.8442058,23.0205904 21.5638783,23.4262181 20.6495155,24.1822926 C19.6983916,24.9751543 19.2045863,26.1184628 19.2045863,27.5014415 C19.2045863,30.0091968 20.7226261,31.0787926 23.1916527,31.9822926 C24.7828031,32.5538777 25.3132323,32.9596436 25.3132323,33.5865479 C25.3132323,34.1950585 24.8010465,34.545367 23.8683031,34.545367 C22.7160907,34.545367 20.8141173,33.9737819 19.5704137,33.2362394 L19.0217412,36.6844202 C20.0824624,37.2929309 22.0576836,37.9198351 24.1061527,37.9198351 C25.7337898,37.9198351 27.0872279,37.5326011 28.0017279,36.7950585 C29.0258252,35.9836649 29.5562544,34.7851755 29.5562544,33.2362394 C29.5562544,30.6730266 28.0017279,29.6035691 25.4960774,28.7000691 L25.4960774,28.7000691 Z M38.4882323,26.6900479 L39.0369049,23.2971862 L36.1403252,23.2971862 L36.1403252,19.1783989 L32.2458473,19.8245266 L31.683458,23.2971862 L30.3136969,23.5212287 L29.8009624,26.6900479 L31.6778341,26.6900479 L31.6778341,33.3468777 C31.6778341,35.0801649 32.1167721,36.2787926 33.0128916,37.0163351 C33.7627898,37.6248457 34.8417544,37.9198351 36.3597942,37.9198351 C37.53025,37.9198351 38.2435243,37.7170904 38.7373296,37.5879202 L38.7373296,33.9921755 C38.4629934,34.0660266 37.8412102,34.1950585 37.4205155,34.1950585 C36.524396,34.1950585 36.1403252,33.7341117 36.1403252,32.6830479 L36.1403252,26.6900479 L38.4882323,26.6900479 L38.4882323,26.6900479 Z M47.1868872,23.0990053 C45.9066969,23.0990053 44.8824624,23.7766649 44.4801482,24.9936862 L44.2058119,23.2971862 L40.2371261,23.2971862 L40.2371261,37.6432394 L44.7727279,37.6432394 L44.7727279,28.3312287 C45.339781,27.6304734 46.1444093,27.3771117 47.2417544,27.3771117 C47.479604,27.3771117 47.7355597,27.3771117 48.0465199,27.4324309 L48.0465199,23.2096436 C47.7355597,23.1359309 47.4612235,23.0990053 47.1868872,23.0990053 L47.1868872,23.0990053 Z M51.4300465,21.8772819 C52.7468606,21.8772819 53.8075819,20.7894309 53.8075819,19.4617713 C53.8075819,18.1155798 52.7468606,17.0461223 51.4300465,17.0461223 C50.0948518,17.0461223 49.0341305,18.1155798 49.0341305,19.4617713 C49.0341305,20.7894309 50.0948518,21.8772819 51.4300465,21.8772819 L51.4300465,21.8772819 Z M49.143865,23.2971862 L53.6978473,23.2971862 L53.6978473,37.6432394 L49.143865,37.6432394 L49.143865,23.2971862 Z M66.6030376,24.5879202 C65.7982721,23.5368564 64.6826836,23.0205904 63.256135,23.0205904 C61.9393208,23.0205904 60.7871084,23.5737819 59.7080066,24.735484 L59.4702942,23.2971862 L55.4832279,23.2971862 L55.4832279,42.9538777 L60.0189668,42.1979415 L60.0189668,37.5879202 C60.7138606,37.8091968 61.427135,37.9198351 62.0672987,37.9198351 C63.2012677,37.9198351 64.8472854,37.6248457 66.1274757,36.2234734 C67.3527987,34.8772819 67.974719,32.7936862 67.974719,30.0461223 C67.974719,27.6120798 67.5174004,25.7681543 66.6030376,24.5879202 L66.6030376,24.5879202 Z M62.8354403,33.438984 C62.4696128,34.1397394 61.9026969,34.5085798 61.2442898,34.5085798 C60.7871084,34.5085798 60.3846571,34.4163351 60.0189668,34.231984 L60.0189668,27.4091968 C60.7871084,26.5979415 61.4820022,26.5056968 61.7380951,26.5056968 C62.8903075,26.5056968 63.4572235,27.7596436 63.4572235,30.2120798 C63.4572235,31.6134521 63.256135,32.7014415 62.8354403,33.438984 L62.8354403,33.438984 Z M80.9782588,30.3411117 C80.9782588,28.054633 80.4844535,26.2474947 79.5150863,24.9751543 C78.5274757,23.6844202 77.0460597,23.0205904 75.1623296,23.0205904 C71.3032412,23.0205904 68.9074624,25.8971862 68.9074624,30.5070691 C68.9074624,33.0886755 69.5474889,35.0248457 70.8094358,36.2602606 C71.9434049,37.3666436 73.5711792,37.9198351 75.6743783,37.9198351 C77.6129757,37.9198351 79.4053518,37.4588883 80.5393208,36.7028138 L80.0455155,33.5681543 C78.9297898,34.1766649 77.6313562,34.5085798 76.1681836,34.5085798 C75.2903075,34.5085798 74.6867677,34.3240904 74.2478296,33.9368564 C73.7722677,33.5312287 73.4979314,32.8673989 73.4065774,31.9269734 L80.9233916,31.9269734 C80.941635,31.7056968 80.9782588,30.6730266 80.9782588,30.3411117 L80.9782588,30.3411117 Z M73.3699535,29.1240904 C73.4979314,27.0772819 74.046604,26.1184628 75.0890819,26.1184628 C76.1133164,26.1184628 76.6437456,27.0958138 76.7168562,29.1240904 L73.3699535,29.1240904 L73.3699535,29.1240904 Z"
																id="Fill-1"
																fill="#FFFFFF"
															/>
														</g>
													</g>
												</g>
											</svg>
											<p className="sr-only">Stripe</p>
										</div>
										<div className="flex-none">
											<svg
												width="100px"
												height="60px"
												viewBox="0 0 100 60"
												className="h-11 w-auto rounded-md shadow-md"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>
													Payment/WesternUnion/WesternUnion-card-dark
												</title>
												<desc>Created with Sketch.</desc>
												<defs></defs>
												<g
													id="Icons:-Payment"
													stroke="none"
													strokeWidth="1"
													fill="none"
													fillRule="evenodd"
												>
													<g id="WesternUnion-card-dark">
														<g id="Payment/WesternUnion/WesternUnion-card-dark">
															<rect
																id="Rectangle"
																fill="#000000"
																x="0"
																y="0"
																width="100"
																height="60"
																rx="4"
															></rect>
															<path
																d="M31.7908715,23.6122377 C31.7908715,24.6424374 32.2220683,25.3882833 33.451544,25.7536312 L35.6949086,26.4091599 C35.9944124,26.4977291 36.2339035,26.6637963 36.2338988,26.9627174 C36.2338988,27.3175769 35.9274028,27.618246 35.4618318,27.618246 C35.1629107,27.618246 34.9723611,27.5110306 34.8500051,27.3560345 C34.7282224,27.1899673 34.6751974,26.9656308 34.6751974,26.7442078 L31.6451984,26.7442078 C31.6451984,28.8267494 33.4177385,29.4245915 35.3452933,29.4245915 C37.6049734,29.4245915 39.1910706,28.6029957 39.1910613,26.6422367 C39.1910613,25.6784639 38.756373,24.9652488 37.7488983,24.5445451 C36.9401217,24.2013394 35.8236882,23.978751 35.2141876,23.8016126 C34.8814704,23.7019723 34.6897647,23.5796069 34.6897647,23.291757 C34.6897647,23.047609 34.9082882,22.8256034 35.4181299,22.8256034 C35.8277624,22.8256034 36.1063032,22.9969148 36.1173604,23.4956993 L38.9579845,23.4956993 C38.9579845,21.6345807 37.4558042,21.0046905 35.4618318,21.0046905 C33.1246537,21.0046905 31.7908761,21.9503998 31.7908715,23.6122377 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M79.1346057,21.0629597 L79.1346057,38.8205019 L80.1397496,38.8205019 L80.1397496,21.0629597 L79.1346057,21.0629597 L79.1346057,21.0629597 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M89.2588811,21.1212289 C88.6680313,21.1212289 88.1808961,21.5996191 88.1809007,22.184642 C88.1809007,22.7754918 88.668036,23.2480551 89.2588811,23.2480551 C89.8468175,23.2480551 90.3222849,22.7754918 90.3222942,22.184642 C90.3222942,21.5996191 89.8468221,21.1212289 89.2588811,21.1212289 Z M89.2588811,21.2523346 C89.7763117,21.2523346 90.1475006,21.6672114 90.1474866,22.184642 C90.1474866,22.7078995 89.7763164,23.1023821 89.2588811,23.1023821 C88.7385371,23.1023821 88.3556944,22.7078995 88.3557084,22.184642 C88.3557084,21.6672114 88.7385417,21.2523346 89.2588811,21.2523346 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M9.67770576,21.2232 L11.4112148,29.2206493 L14.8490983,29.2206493 L15.5920307,24.0346895 L15.606598,24.0346895 L16.3495305,29.2206493 L19.7874139,29.2206493 L21.520923,21.2232 L18.6802989,21.2232 L18.010203,26.2489195 L17.9810684,26.2489195 L17.2381359,21.2232 L13.9604928,21.2232 L13.2175603,26.2489195 L13.202993,26.2489195 L12.5183298,21.2232 L9.67770576,21.2232 L9.67770576,21.2232 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M23.4583742,21.2232 L23.4583742,29.2206493 L29.6349106,29.2206493 L29.6349106,27.137525 L26.4883732,27.137525 L26.4883732,26.2343522 L29.2998627,26.2343522 L29.2998627,24.1512279 L26.4883732,24.1512279 L26.4883732,23.3063243 L29.5329395,23.3063243 L29.5329395,21.2232 L23.4583742,21.2232 L23.4583742,21.2232 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M40.9974068,21.2232 L40.9974068,23.3645936 L42.97856,23.3645936 L42.97856,29.2206493 L46.1396647,29.2206493 L46.1396647,23.3645936 L48.1208179,23.3645936 L48.1208179,21.2232 L40.9974068,21.2232 L40.9974068,21.2232 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M50.2622115,21.2232 L50.2622115,29.2206493 L56.4533152,29.2206493 L56.4533152,27.137525 L53.3067777,27.137525 L53.3067777,26.2343522 L56.1182672,26.2343522 L56.1182672,24.1512279 L53.3067777,24.1512279 L53.3067777,23.3063243 L56.351344,23.3063243 L56.351344,21.2232 L50.2622115,21.2232 L50.2622115,21.2232 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M58.7986509,21.2232 L58.7986509,29.2206493 L61.9014864,29.2206493 L61.9014864,26.3654579 L62.265669,26.3654579 C62.7749419,26.3654579 62.9713091,26.520454 63.037736,26.9190155 C63.1484475,27.6060095 63.242853,28.6222245 63.4310532,29.2206493 L66.5338887,29.2206493 C66.1685408,28.0127285 66.2011622,26.8770616 66.0240331,26.1906503 C65.869037,25.5811544 65.4442405,25.237366 64.669274,25.1709391 L64.669274,25.1563718 C65.8655409,24.8679392 66.2571146,24.1675433 66.25711,23.2480551 C66.25711,21.7412133 65.2502227,21.2232 63.5330243,21.2232 L58.7986509,21.2232 Z M61.9014864,23.0441129 L62.1928325,23.0441129 C62.8133996,23.0441129 63.212539,23.1565725 63.2125437,23.7433434 C63.2125437,24.3417682 62.7731938,24.5591124 62.1636979,24.5591124 L61.9014864,24.5591124 L61.9014864,23.0441129 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M68.7481187,21.2232 L68.7481187,29.2206493 L71.311964,29.2206493 L71.311964,24.3406028 L71.3410987,24.3406028 L73.0309058,29.2206493 L76.8329718,29.2206493 L76.8329718,21.2232 L74.2545592,21.2232 L74.2545592,26.0595446 L74.2400152,26.0595446 L72.5502081,21.2232 L68.7481421,21.2232 L68.7481187,21.2232 L68.7481187,21.2232 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M86.3017187,21.2232 L86.3017187,38.7913673 L87.3068626,38.7913673 L87.3068626,21.2232 L86.3017187,21.2232 L86.3017187,21.2232 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M88.865564,21.5873826 L88.865564,22.7819014 L89.011237,22.7819014 L89.011237,22.2283439 L89.2734484,22.2283439 L89.6084964,22.7819014 L89.783304,22.7819014 L89.4336888,22.2283439 C89.6446233,22.222517 89.7978807,22.1415228 89.7978713,21.9078633 C89.7978713,21.711496 89.6906513,21.5873826 89.3754196,21.5873826 L88.865564,21.5873826 Z M89.011237,21.6893537 L89.346285,21.6893537 C89.4925407,21.6893537 89.6376263,21.7079999 89.637631,21.893296 C89.637631,22.1356959 89.3981446,22.1118055 89.2297465,22.1118055 L89.011237,22.1118055 L89.011237,21.6893537 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M62.2219671,30.5754085 C59.4635026,30.5754085 58.0848531,32.2931848 58.0848531,34.785359 C58.0848531,37.2781158 59.4634933,38.9953095 62.2219671,38.9953095 C64.9804315,38.9953095 66.3445231,37.2781158 66.3445138,34.785359 C66.3445138,32.2931848 64.9804222,30.5754085 62.2219671,30.5754085 Z M62.2219671,32.6585328 C62.7318227,32.6585328 63.06688,32.9801788 63.0668706,34.785359 C63.0668706,36.6354064 62.7090884,36.9121805 62.2219671,36.9121852 C61.7348365,36.9121852 61.3624962,36.6354064 61.3624962,34.785359 C61.3624962,32.9801788 61.7126848,32.6585328 62.2219671,32.6585328 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M31.52866,30.7793507 L31.52866,36.0964162 C31.52866,38.0239617 32.9154812,38.9953095 35.330726,38.9953095 C37.7454022,38.9953095 39.1327921,38.0239617 39.1327921,36.0964162 L39.1327921,30.7793507 L35.9571201,30.7793507 L35.9571201,35.9653105 C35.9571201,36.5963661 35.6628745,36.8393487 35.330726,36.8393487 C34.9985915,36.8393487 34.7043367,36.5963661 34.704332,35.9653105 L34.704332,30.7793507 L31.52866,30.7793507 L31.52866,30.7793507 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M41.7549066,30.7793507 L41.7549066,38.7768 L44.3333192,38.7768 L44.3333192,33.9113208 L44.3478865,33.9113208 L46.0376936,38.7768 L49.8397597,38.7768 L49.8397597,30.7793507 L47.2759144,30.7793507 L47.2759144,35.6302625 L47.2467798,35.6302625 L45.5569726,30.7793507 L41.7549066,30.7793507 L41.7549066,30.7793507 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M52.5201434,30.7793507 L52.5201434,38.7768 L55.6958154,38.7768 L55.6958154,30.7793507 L52.5201434,30.7793507 L52.5201434,30.7793507 Z"
																id="Path"
																fill="#FFDE38"
															></path>
															<path
																d="M68.7481187,30.7793507 L68.7481187,38.7768 L71.311964,38.7768 L71.311964,33.9113208 L71.3410987,33.9113208 L73.0309058,38.7768 L76.8329718,38.7768 L76.8329718,30.7793507 L74.2545592,30.7793507 L74.2545592,35.6302625 L74.2400152,35.6302625 L72.5502081,30.7793507 L68.7481421,30.7793507 L68.7481187,30.7793507 L68.7481187,30.7793507 Z"
																id="Path"
																fill="#FFDE38"
															></path>
														</g>
													</g>
												</g>
											</svg>
											<p className="sr-only">Stripe</p>
										</div>
									</dd>
								</div>
							</dl>
						</div>

						<div className="mt-6 flex items-center">
							{product?.availability ? (
								<CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
							) : (
								<ExclamationCircleIcon className="h-5 w-5 flex-shrink-0 text-red-500" />
							)}

							<p className="ml-2 text-sm capitalize text-gray-500">
								{product?.availability
									? "Available for Rent"
									: "Currently Out On rent"}{" "}
							</p>
						</div>
					</section>
				</div>

				{/* Product image */}
				<div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
					<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
						<img
							src={imageUrl + product?.image_path}
							alt={product?.bike_model}
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>

				{/* Product form */}
				<div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
					<section aria-labelledby="options-heading">
						<h2 id="options-heading" className="sr-only">
							Product options
						</h2>

						<div>
							<div className="sm:flex sm:justify-between">
								{/* Size selector */}
								<div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
									<label htmlFor="PickUp Date"> Pick Up Date</label>

									<input type="date" name="start_date" onChange={storeInfo} />
									<label htmlFor="PickUp Date"> Return Date</label>
									<input type="date" name="start_date" onChange={storeInfo} />
								</div>
							</div>
							<div className="mt-4">
								<Link
									to={`/memberCatalogue/${product?.employee_id}`}
									className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
								>
									<span>Dealer </span>
									<QuestionMarkCircleIcon
										className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
								</Link>
							</div>
							<div className="mt-10">
								{product?.availability ? (
									<button
										type="submit"
										onClick={() => setLoaded(() => true)}
										className="flex w-full items-center justify-center space-x-3 rounded-md border border-transparent bg-orange-600 py-3 px-8 text-base font-medium capitalize text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50"
									>
										<RefreshIcon
											className={`h-6 w-auto ${
												loaded ? "animate-spin" : ""
											} text-white`}
										/>
										<span>Complete Reservation now</span>
									</button>
								) : (
									<button
										type="submit"
										onClick={() => setLoaded(() => true)}
										className="flex w-full items-center justify-center space-x-3 rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium capitalize text-white hover:bg-red-700 focus:outline-none "
									>
										<BanIcon className={`h-6 w-auto `} />
										<span>Unable Reservation now</span>
									</button>
								)}
							</div>
							<div className="mt-6 text-center">
								<div className="group inline-flex text-base font-medium">
									<ShieldCheckIcon
										className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
									<span className="text-gray-500 hover:text-gray-700">
										Protected By AmberConnect
									</span>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
