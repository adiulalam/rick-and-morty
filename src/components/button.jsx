export const Button = ({
	filterObject,
	isLoading,
	onClickHandler,
	label,
	disabled,
	showBounce,
	customCSS,
	showFilter,
}) => {
	return (
		<button
			className={`${customCSS} flex items-center justify-center px-4 py-2 bg-[#d2e054] hover:bg-[#EDCF6B] text-gray-800 text-sm font-medium rounded-md`}
			onClick={() => onClickHandler()}
			disabled={disabled ?? false}
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
			{label}
			{showBounce && (
				<div
					className={`${
						filterObject?.status || filterObject?.gender ? "bg-slate-500" : "animate-bounce bg-[#160440]"
					} ml-2 p-1 w-5 h-5 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center`}
				>
					<svg
						className={`${showFilter || filterObject?.status || filterObject?.gender ? "rotate-180" : ""} ${
							filterObject?.status || filterObject?.gender ? "text-[#28c765]" : "text-[#08C952]"
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
			)}
		</button>
	);
};
