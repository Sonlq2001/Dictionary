const Category = require("../models/categoryModel");
const Vocabulary = require("../models/vocabularyModel");

const mongoDataMethods = {
	async getCategories() {
		return await Category.find();
	},
	async getVocabularies() {
		return await Vocabulary.find();
	},
	async getCategory(id) {
		return await Category.findOne({ _id: id });
	},
	async getVocabulary(id) {
		return await Vocabulary.findOne({ _id: id });
	},
};

module.exports = mongoDataMethods;
