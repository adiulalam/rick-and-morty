export default function App() {
	return (
		<div class="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
			<div class="flex flex-col min-w-full md:min-w-min items-start border rounded-lg shadow-md md:flex-row md:max-w-xl bg-gray-800">
				<img
					class="object-cover w-full rounded-t-lg h-96 md:h-64 md:w-48 md:rounded-none md:rounded-l-lg"
					src="https://rickandmortyapi.com/api/character/avatar/91.jpeg"
					alt=""
				/>
				<div class="flex flex-col justify-between p-4 leading-normal w-full md:w-96">
					<h5 class="mb-2 text-3xl font-bold tracking-tight text-white">Noteworthy</h5>
					<div class="flex flex-row items-center">
						<svg height="30" width="25">
							<circle cx="10" cy="10" r="8" stroke="black" stroke-width="1" fill="green" />
						</svg>
						<h3 class="mb-2 text-lg tracking-tight text-white">Alive - Male - Human</h3>
					</div>

					<h2 class="font-normal text-gray-400">Origin:</h2>
					<div class="flex flex-row items-center justify-between mb-2 gap-2">
						<h3 class="text-sm tracking-tight text-white">
							<b>Dimension:</b> Dimension C-137
						</h3>
						<h3 class="text-sm tracking-tight text-white">
							<b>Type:</b> Planet
						</h3>
						<h3 class="text-sm tracking-tight text-white">
							<b>Name:</b> Earth (C-137)
						</h3>
					</div>

					<h2 class="font-normal text-gray-400">Last Known Location:</h2>
					<div class="flex flex-row items-center justify-between mb-2 gap-2">
						<h3 class="text-sm tracking-tight text-white">
							<b>Dimension:</b> unknown
						</h3>
						<h3 class="text-sm tracking-tight text-white">
							<b>Type:</b> Space station
						</h3>
						<h3 class="text-sm tracking-tight text-white">
							<b>Name:</b> Citadel of Ricks
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
