const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Vocabulary {
		name: String
		meaning: String
		category: Category
		pattern: String
	}

	type Category {
		name: String
	}

	# ROOT TYPE
	type Query {
		vocabularies: [Vocabulary]
		vocabulary(id: ID!): Vocabulary
		categories: [Category]
		# category: Category
	}

	# mutation
	type Mutation {
		createCategory(name: String!): Category
		createVocabulary(
			name: String!
			meaning: String!
			categoryId: String!
			pattern: String!
		): Vocabulary
	}
`;

module.exports = typeDefs;
