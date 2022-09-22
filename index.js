const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql `

  type Deck {
    id: String!
    image: String!
    type: String!
    brand: String!
    construction: String!
    deckLenght: Int!  
    price: Float!
    onSale: Boolean!
    description: String!
  }

 
  type Query {
    decks: [Deck!]
    deck(id: ID!): Deck
    
  }
`;
const decks = [{
        id: "7837473793-21123727hhs",
        image: "img-1",
        type: 'Longboard',
        brand: 'Land Yachtz',
        deckLenght: 35,
        construction: 'Bamboo',
        price: 75.80,
        onSale: true,
        description: "something here",
    },
    {
        id: "7133747393-273727hhs",
        image: "img-2",
        type: 'Cruiser',
        brand: 'Brand2',
        deckLenght: 45,
        construction: 'Maple',
        price: 125.00,
        onSale: false,
        description: "something here",
    },
    {
        id: "783747393-273727hhs112",
        image: "img-3",
        type: 'DanceBoard',
        brand: 'Brand3',
        deckLenght: 28,
        construction: 'Plastic',
        price: 68.00,
        onSale: false,
        description: "something here",
    },
    {
        id: "783747393-273727hhs123",
        image: "img-4",
        type: 'DownHill',
        brand: 'Land Yachtz',
        deckLenght: 37,
        construction: 'Bamboo',
        price: 175.88,
        onSale: true,
        description: "something here",
    },
    {
        id: "783747393-1212273727hhs",
        image: "img-5",
        type: 'SkateBoard',
        brand: 'Element',
        deckLenght: 27,
        construction: 'Bamboo',
        price: 80.88,
        onSale: false,
        description: "This is a prod deck of Chad Muska",
    },
    {
        id: "11783747393-273727hhs",
        image: "img-6",
        type: 'Electric Boards',
        brand: 'Some Brand here',
        deckLenght: 37,
        construction: 'Plastic',
        price: 500.88,
        onSale: true,
        description: "Some description here",
    },
    {
        id: "783747393-273727hhs",
        image: "img-7",
        type: 'PennyBoard',
        brand: 'Some Brand here',
        deckLenght: 20,
        construction: 'Plastic',
        price: 59.88,
        onSale: true,
        description: "Some description here",
    },
];


const resolvers = {
    Query: {
        decks: () => decks,
        deck: (parent, args, context) => {
            const productID = args.id;
            const product = decks.find(deck => deck.id === productID);
            if (!product) return null;
            return product;
        }
    },
};
const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const { isConstValueNode } = require('graphql');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',

    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});