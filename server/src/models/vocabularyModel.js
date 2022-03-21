const mongoose = require("mongoose");

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		meaning: {
			type: String,
			required: true,
		},
		pattern: {
			type: String,
			required: true,
		},
		categoryId: {
			type: mongoose.Types.ObjectId,
			ref: "category",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("vocabulary", schema);
