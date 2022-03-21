const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schemas/schemas");
const resolvers = require("./resolvers/resolvers");
const mongoDataMethods = require("./helpers/mongoDataMethods");

const db = require("./config/connectDB");

const port = 4000;
const app = express();
db.connectDB();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ mongoDataMethods }),
});

server.start().then(() => {
	server.applyMiddleware({ app });
	app.listen(port, () => {
		console.log(`Server running http://localhost:${port}${server.graphqlPath}`);
	});
});
