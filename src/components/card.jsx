export const Card = () => {
	return (
		<div class="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
			<div class="flex flex-col min-w-full md:min-w-min items-start border rounded-lg shadow-md md:flex-row md:max-w-xl bg-[#08C952]">
				<img
					class="object-cover w-full rounded-t-lg h-96 md:h-64 md:w-48 md:rounded-none md:rounded-l-lg"
					src="https://rickandmortyapi.com/api/character/avatar/91.jpeg"
					alt=""
				/>
				<div class="flex flex-col justify-between p-4 leading-normal w-full md:w-96">
					<h5 class="mb-2 text-3xl font-bold tracking-tight text-black">Noteworthy</h5>
					<div class="flex flex-row items-center">
						<svg height="30" width="25">
							<circle cx="10" cy="10" r="8" stroke="black" stroke-width="1" fill="green" />
						</svg>
						<h3 class="mb-2 text-lg tracking-tight text-black">Alive - Male - Human</h3>
					</div>

					<h2 class="font-medium text-gray-800">Origin:</h2>
					<div class="flex flex-row items-center justify-between mb-2 gap-2">
						<h3 class="text-sm tracking-tight text-black">
							<b>Dimension:</b> Dimension C-137
						</h3>
						<h3 class="text-sm tracking-tight text-black">
							<b>Type:</b> Planet
						</h3>
						<h3 class="text-sm tracking-tight text-black">
							<b>Name:</b> Earth (C-137)
						</h3>
					</div>

					<h2 class="font-medium text-gray-800">Last Known Location:</h2>
					<div class="flex flex-row items-center justify-between mb-2 gap-2">
						<h3 class="text-sm tracking-tight text-black">
							<b>Dimension:</b> unknown
						</h3>
						<h3 class="text-sm tracking-tight text-black">
							<b>Type:</b> Space station
						</h3>
						<h3 class="text-sm tracking-tight text-black">
							<b>Name:</b> Citadel of Ricks
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
