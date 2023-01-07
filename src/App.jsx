import { Card } from "./components/card";
import { Search } from "./components/search";
import { NetworkStatus, useQuery } from "@apollo/client";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { CharacterQuery } from "./connection/query";
import { client } from "./connection/client";

export default function App() {
	const [filterObject, setFilterObject] = useState({ name: "", status: "", gender: "" });
	const [pageNumber, setPageNumber] = useState(1);
	const [fullyLoaded, setFullyLoaded] = useState(false);

	const { data, networkStatus, error, fetchMore, variables, refetch, loading } = useQuery(CharacterQuery, {
		notifyOnNetworkStatusChange: true,
		variables: {
			page: pageNumber,
			filter: { name: filterObject?.name, status: filterObject?.status, gender: filterObject?.gender },
		},
	});
	if (loading) {
		return <p>loading...</p>;
	}
	console.log("🚀 ~ file: App.jsx:21 ~ App ~ data", data);
	return (
		<div className="bg-[#160440]">
			<Search filterObject={filterObject} setFilterObject={setFilterObject} />
			{data?.characters?.results?.map((character) => (
				<Card {...character} />
			))}
		</div>
	);
}
