const { v4: uuid } = require("uuid");
const { db } = require("../db");

exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name,
        }
        db.categories.push(newCategory);
        return newCategory;
    },

    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((category) => category.id !== id);
        db.decks = db.decks.map(deck => {
            if (deck.categoryId === id) return {
                ...deck,
                categoryId: null,
            }
            else return deck;
        })
        return true;
    },

    deleteProduct: (parent, { id }, { db }) => {
        db.decks = db.decks.filter(deck => deck.id !== id);
        db.reviews = db.reviews.filter(review => review.productId !== id);
        return true;
    },
    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter(review => review.id !== id);
        return true;
    },
    updateCategory: (parent, { id, input }, { db }) => {
        const index = db.categories.findIndex((category) => category.id === id);
        if (index === -1) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input
        };
        return db.categories[index];
    },
    updateDeck: (parent, { id, input }, { db }) => {
        const index = db.decks.findIndex((deck) => deck.id === id);
        if (index === -1) return null;
        db.decks[index] = {
            ...db.decks[index],
            ...input
        };
        return db.decks[index];
    },
};