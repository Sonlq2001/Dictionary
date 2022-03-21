const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://sonel:sonel@cluster0.2j2zo.mongodb.net/dictionary?retryWrites=true&w=majority`
		);
		console.log("Connect db successfully");
	} catch (error) {
		console.log("Connect db failed");
	}
};

module.exports = { connectDB };
