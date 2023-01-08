import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCharacter = ({ name, status, gender }) => {
	const { data, error, fetchNextPage, hasNextPage, refetch, isLoading, isRefetching } = useInfiniteQuery(
		["characters"],
		({ pageParam = 1 }) =>
			fetch(
				`https://rickandmortyapi.com/api/character/?page=${pageParam}&name=${name}&status=${status}&gender=${gender}`
			).then((res) => res.json()),
		{
			getNextPageParam: (lastPage) => {
				const previousPage = lastPage.info.prev ? +lastPage.info.prev.split("=")[1] : 0;
				const currentPage = previousPage + 1;

				if (currentPage === lastPage.info.pages) return false;
				return currentPage + 1;
			},
			refetchOnWindowFocus: false,
		}
	);

	const characters = useMemo(
		() =>
			data?.pages.reduce((prev, page) => {
				return {
					info: page.info,
					results: [...prev.results, ...page.results],
				};
			}),
		[data]
	);

	return {
		error,
		fetchNextPage,
		hasNextPage,
		characters,
		data,
		refetch,
		isLoading,
		isRefetching,
	};
};
