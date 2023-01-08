export const Dropdown = ({ value, name, onClickHandler, options }) => {
	return (
		<select
			className="transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300 px-4 py-3 w-full rounded-md bg-[#d2e054] focus:bg-[#EDCF6B] focus:ring-0 text-sm"
			onChange={(e) => onClickHandler(e, name)}
			value={value}
		>
			<option className="font-bold" value="">
				Status
			</option>
			{options?.map((option, index) => (
				<option value={option?.value} key={index}>
					{option?.key}
				</option>
			))}
		</select>
	);
};
