import { useState } from "react";

export const Search = ({ filterObject, setFilterObject, refetch, isLoading }) => {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<div className="flex flex-row items-center justify-center rounded p-5">
			<div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-[#08C952]">
				<div className="relative">
					<div className="absolute flex items-center ml-2 h-full">
						<svg
							className="w-4 h-4 fill-current text-primary-gray-dark"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
						</svg>
					</div>

					<input
						onChange={(e) => setFilterObject({ ...filterObject, name: e?.target?.value ?? "" })}
						onKeyDown={(e) => e.key === "Enter" && refetch()}
						value={filterObject?.name ?? ""}
						type="text"
						placeholder="Search by character name..."
						className="px-8 py-3 w-full rounded-md bg-[#d2e054] border-transparent focus:border-gray-400 placeholder-gray-500 focus:bg-[#EDCF6B] focus:ring-0 text-sm"
					/>
				</div>

				<div className="flex items-center justify-between mt-4">
					<p className="font-medium">Filters</p>

					<button
						className={`${
							filterObject?.status || filterObject?.gender
								? "cursor-not-allowed"
								: "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
						} flex items-center justify-center px-4 py-2 bg-[#d2e054] hover:bg-[#EDCF6B] text-gray-800 text-sm font-medium rounded-md`}
						onClick={() => (showFilter ? setShowFilter(false) : setShowFilter(true))}
						disabled={filterObject?.status || filterObject?.gender}
					>
						{showFilter || filterObject?.status || filterObject?.gender ? "Hide" : "Show"} Filter
						<div
							className={`${
								filterObject?.status || filterObject?.gender
									? "bg-slate-500"
									: "animate-bounce bg-[#160440]"
							} ml-2 p-1 w-5 h-5 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center`}
						>
							<svg
								className={`${
									showFilter || filterObject?.status || filterObject?.gender ? "rotate-180" : ""
								} ${
									filterObject?.status || filterObject?.gender ? "text-violet-900" : "text-violet-500"
								}`}
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
							</svg>
						</div>
					</button>
					<button
						className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex px-4 py-2 bg-[#d2e054] hover:bg-[#EDCF6B] text-gray-800 text-sm font-medium rounded-md"
						onClick={() => refetch()}
					>
						{isLoading && (
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-50"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									fill="#160440"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						)}
						{isLoading ? "Fetching..." : "Search"}
					</button>
				</div>

				{(showFilter || filterObject?.status || filterObject?.gender) && (
					<div>
						<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
							<select
								className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-3 w-full rounded-md bg-[#d2e054] focus:bg-[#EDCF6B] focus:ring-0 text-sm"
								onChange={(e) => setFilterObject({ ...filterObject, status: e?.target?.value ?? "" })}
								value={filterObject?.status}
							>
								<option className="font-bold" value="">
									Status
								</option>
								<option value="alive">Alive</option>
								<option value="dead">Dead</option>
								<option value="unknown">Unknown</option>
							</select>

							<select
								className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-3 w-full rounded-md bg-[#d2e054] focus:bg-[#EDCF6B] focus:ring-0 text-sm"
								onChange={(e) => setFilterObject({ ...filterObject, gender: e?.target?.value ?? "" })}
								value={filterObject?.gender}
							>
								<option className="font-bold" value="">
									Gender
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="genderless">Genderless</option>
								<option value="unknown">Unknown</option>
							</select>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
