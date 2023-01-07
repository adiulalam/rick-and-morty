export const Card = (props) => {
	return (
		<div className="flex flex-col md:h-72 justify-around min-w-full md:min-w-min border rounded-lg shadow-md md:flex-row md:max-w-xl bg-[#08C952]">
			<img
				className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-l-lg"
				src={props?.image}
				alt={props?.name}
				loading="lazy"
			/>
			<div className="flex flex-col justify-between p-4 leading-normal w-full md:w-96">
				<h5 className="mb-2 text-3xl font-bold tracking-tight text-black">{props?.name}</h5>
				<div className="flex flex-row items-center">
					<svg height="30" width="25">
						<circle
							cx="10"
							cy="10"
							r="8"
							stroke="black"
							strokeWidth="1"
							fill={props?.status === "Alive" ? "green" : props?.status === "Dead" ? "red" : "yellow"}
						/>
					</svg>
					<h3 className="mb-2 text-lg tracking-tight text-black">{`${props?.status} - ${props?.gender} - ${props?.species}`}</h3>
				</div>
				<div>
					<h2 className="font-medium text-gray-800">Origin:</h2>
					<div className="flex flex-row items-center justify-between mb-2 gap-2">
						<h3 className="text-sm tracking-tight text-black">
							<b>Dimension:</b> {props?.origin?.dimension ?? "unknown"}
						</h3>
						<h3 className="text-sm tracking-tight text-black">
							<b>Type:</b> {props?.origin?.type ?? "unknown"}
						</h3>
						<h3 className="text-sm tracking-tight text-black">
							<b>Name:</b> {props?.origin?.name ?? "unknown"}
						</h3>
					</div>
				</div>

				<div>
					<h2 className="font-medium text-gray-800">Last Known Location:</h2>
					<div className="flex flex-row items-center justify-between mb-2 gap-2">
						<h3 className="text-sm tracking-tight text-black">
							<b>Dimension:</b> {props?.location?.dimension ?? "unknown"}
						</h3>
						<h3 className="text-sm tracking-tight text-black">
							<b>Type:</b> {props?.location?.type ?? "unknown"}
						</h3>
						<h3 className="text-sm tracking-tight text-black">
							<b>Name:</b> {props?.location?.name ?? "unknown"}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
