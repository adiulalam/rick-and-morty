import { useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCharacter = ({ name, status, gender }) => {
	const [isError, setIsError] = useState({ error: false, message: "" });
	const { data, error, fetchNextPage, hasNextPage, refetch, isLoading, isRefetching } = useInfiniteQuery(
		["characters"],
		({ pageParam = 1 }) =>
			fetch(
				`https://rickandmortyapi.com/api/character/?page=${pageParam}&name=${name}&status=${status}&gender=${gender}`
			).then((response) => {
				setIsError({ error: false, message: "" });
				if (response.ok) {
					return response.json();
				} else if (response.status === 404) {
					Promise.reject("error 404");
					setIsError({ error: true, message: "error 404" });
					return isError;
				} else {
					setIsError({ error: true, message: `some other error: ${response?.status}` });
					Promise.reject("some other error: " + response.status);
					return isError;
				}
			}),
		{
			getNextPageParam: (lastPage) => {
				const previousPage = lastPage?.info?.prev ? +lastPage?.info?.prev?.split("=")[1] : 0;
				const currentPage = previousPage + 1;

				if (currentPage === lastPage?.info?.pages) return false;
				return currentPage + 1;
			},
			refetchOnWindowFocus: false,
		}
	);

	const characters = useMemo(
		() =>
			data?.pages?.reduce((prev, page) => ({
				info: page?.info,
				results: [...prev?.results, ...page?.results],
			})),
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
		isError,
	};
};
