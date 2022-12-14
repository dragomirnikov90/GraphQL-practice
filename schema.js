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
    decks(filter: DecksFilterInput): [Deck!]!
  }
 
  type Query {
    decks(filter: DecksFilterInput): [Deck!]
    deck(id: ID!): Deck
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: addCategoryInput!): Category!
    addDeck(input: addDeckInput!): Deck!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: updateCategoryInput!): Category
    updateDeck(id: ID!, input: updateDeckInput!): Deck
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input DecksFilterInput{
    onSale: Boolean
    avgRating: Int
  }

  input addCategoryInput{
    name: String!
  }

  input updateCategoryInput{
    name: String!
  }

  input addDeckInput{
    image: String!
    type: String!
    brand: String!
    construction: String!
    deckLenght: Int!  
    price: Float!
    onSale: Boolean!
    description: String!
    categoryId: String
  }
  input updateDeckInput{
    image: String!
    type: String!
    brand: String!
    construction: String!
    deckLenght: Int!  
    price: Float!
    onSale: Boolean!
    description: String!
    categoryId: String! 
  }
`;