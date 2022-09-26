const { gql } = require('apollo-server');

exports.typeDefs = gql `

  type Deck {
    id: ID!
    image: String!
    type: String!
    brand: String!
    construction: String!
    deckLenght: Int!  
    price: Float!
    onSale: Boolean!
    description: String!
    category: Category
    reviews: [Review!]!
  }

  type Category{
    id: ID!
    name: String!
    decks: [Deck!]!
  }
 
  type Query {
    decks: [Deck!]
    deck(id: ID!): Deck
    categories: [Category!]!
    category(id: ID!): Category
    
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
`;