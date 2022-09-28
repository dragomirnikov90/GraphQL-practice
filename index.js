const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Deck } = require("./resolvers/Deck");
const { Mutation } = require("./resolvers/Mutation");
const { db } = require("./db");

const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const { isConstValueNode } = require('graphql');
//const { decks, categories, reviews } = require('./db');


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Deck,
    },
    csrfPrevention: true,
    cache: 'bounded',
    context: {
        db,
    },
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});