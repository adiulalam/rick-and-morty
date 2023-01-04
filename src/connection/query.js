import { gql } from "@apollo/client";

export const CharacterQuery = gql`
	query ListCharacter($filter: FilterCharacter, $page: Int) {
		characters(filter: $filter, page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				status
				species
				image
				gender
				origin {
					id
					name
					type
					dimension
				}
				location {
					id
					name
					type
					dimension
				}
			}
		}
	}
`;
