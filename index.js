const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Deck } = require("./resolvers/Deck");


const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const { isConstValueNode } = require('graphql');
const { decks, categories, reviews } = require('./db');


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Deck,
    },
    csrfPrevention: true,
    cache: 'bounded',
    context: {
        categories,
        decks,
        reviews,
    },
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});