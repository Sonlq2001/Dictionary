const Category = require("../models/categoryModel");
const Vocabulary = require("../models/vocabularyModel");

const resolvers = {
	// query
	Query: {
		async categories(parent, args, { mongoDataMethods }) {
			return await mongoDataMethods.getCategories();
		},
		async vocabularies(parent, args, { mongoDataMethods }) {
			return await mongoDataMethods.getVocabularies();
		},
		async vocabulary(parent, args, { mongoDataMethods }) {
			return await mongoDataMethods.getVocabulary(args.id);
		},
	},
	Vocabulary: {
		async category(parent, args, { mongoDataMethods }) {
			return await mongoDataMethods.getCategory(parent.categoryId);
		},
	},

	// mutation
	Mutation: {
		async createCategory(parent, args) {
			const newCategory = new Category(args);
			return await newCategory.save();
		},
		async createVocabulary(parent, args) {
			const newVocabulary = new Vocabulary(args);
			return await newVocabulary.save();
		},
	},
};

module.exports = resolvers;
