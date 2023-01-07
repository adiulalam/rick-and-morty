import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import fetch from "cross-fetch";

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				characters: relayStylePagination(),
			},
		},
	},
});

export const client = new ApolloClient({
	link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql", fetch }),
	cache,
});
