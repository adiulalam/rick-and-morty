import { Card } from "./components/card";
import { Search } from "./components/search";
import { useState } from "react";
import { useCharacter } from "./hooks/useCharacter";
import InfiniteScroll from "react-infinite-scroll-component";

export default function App() {
	const [filterObject, setFilterObject] = useState({ name: "", status: "", gender: "" });

	const { characters, error, fetchNextPage, hasNextPage, refetch, isLoading } = useCharacter(filterObject);

	return (
		<InfiniteScroll
			dataLength={characters ? characters.results.length : 0}
			next={() => fetchNextPage()}
			hasMore={!!hasNextPage}
			// loader={<Loading />}
		>
			<div className="bg-[#160440]">
				<Search filterObject={filterObject} setFilterObject={setFilterObject} refetch={refetch} />
				{characters?.results?.map((character, index) => (
					<Card {...character} key={index} />
				))}
			</div>
		</InfiniteScroll>
	);
}
