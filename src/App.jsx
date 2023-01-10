import { Card } from "./components/card";
import { Search } from "./components/search";
import { useState } from "react";
import { useCharacter } from "./hooks/useCharacter";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchSkeleton } from "./components/searchSkeleton";
import { CardSkeleton } from "./components/cardSkeleton";
import { Error } from "./pages/error";

export default function App() {
	const [filterObject, setFilterObject] = useState({ name: "", status: "", gender: "" });

	const { characters, error, fetchNextPage, hasNextPage, refetch, isLoading, isRefetching } =
		useCharacter(filterObject);

	if (error) {
		return <Error />;
	}

	if (isLoading) {
		return (
			<div className="bg-[#160440] min-w-[320px]">
				<SearchSkeleton />
				<CardSkeleton array={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
			</div>
		);
	}

	if ((!isLoading && isRefetching) || characters?.error) {
		return (
			<div className="bg-[#160440] min-w-[320px] h-screen">
				<Search
					filterObject={filterObject}
					setFilterObject={setFilterObject}
					refetch={refetch}
					isLoading={!isLoading && isRefetching}
				/>
				{characters.error ? (
					<Error hideWrapper={true} message={characters?.error} />
				) : (
					<CardSkeleton array={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
				)}
			</div>
		);
	}

	return (
		<InfiniteScroll
			dataLength={characters.results ? characters?.results?.length : 0}
			next={() => fetchNextPage()}
			hasMore={!!hasNextPage}
			loader={
				<div className="bg-[#160440] min-w-[320px] overflow-hidden">
					<CardSkeleton array={[1, 2, 3]} />
				</div>
			}
		>
			<div className="bg-[#160440] min-w-[320px]">
				<Search filterObject={filterObject} setFilterObject={setFilterObject} refetch={refetch} />

				<div className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
					{characters?.results?.map((character, index) => (
						<Card {...character} key={index} />
					))}
				</div>
			</div>
		</InfiniteScroll>
	);
}
