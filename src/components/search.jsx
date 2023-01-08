import { useState } from "react";
import { Button } from "./button";
import { Dropdown } from "./dropdown";
import { Input } from "./input";

export const Search = ({ filterObject, setFilterObject, refetch, isLoading }) => {
	const [showFilter, setShowFilter] = useState(false);

	const showFilterHandler = () => (showFilter ? setShowFilter(false) : setShowFilter(true));

	const filterObjectHandler = (e, name) => setFilterObject({ ...filterObject, [name]: e?.target?.value ?? "" });

	return (
		<div className="flex flex-row items-center justify-center rounded p-5">
			<div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-[#08C952]">
				<Input filterObject={filterObject} setFilterObject={setFilterObject} refetch={refetch} />

				<div className="flex items-center justify-between mt-4">
					<p className="font-medium">Filters</p>

					<Button
						filterObject={filterObject}
						onClickHandler={showFilterHandler}
						label={`${showFilter || filterObject?.status || filterObject?.gender ? "Hide" : "Show"} Filter`}
						disabled={filterObject?.status || filterObject?.gender}
						showBounce={true}
						customCSS={
							filterObject?.status || filterObject?.gender
								? "cursor-not-allowed"
								: "transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300 "
						}
						showFilter={showFilter}
					/>
					<Button
						filterObject={filterObject}
						isLoading={isLoading}
						onClickHandler={refetch}
						label={isLoading ? "Fetching..." : "Search"}
						disabled={isLoading}
						customCSS={`${
							isLoading ? "cursor-not-allowed" : ""
						} transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300`}
					/>
				</div>

				{(showFilter || filterObject?.status || filterObject?.gender) && (
					<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
						<Dropdown
							value={filterObject?.status}
							name={"status"}
							onClickHandler={filterObjectHandler}
							options={[
								{ key: "Alive", value: "alive" },
								{ key: "Dead", value: "dead" },
								{ key: "Unknown", value: "unknown" },
							]}
						/>

						<Dropdown
							value={filterObject?.gender}
							name={"gender"}
							onClickHandler={filterObjectHandler}
							options={[
								{ key: "Male", value: "male" },
								{ key: "Female", value: "female" },
								{ key: "Genderless", value: "genderless" },
								{ key: "Unknown", value: "unknown" },
							]}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
