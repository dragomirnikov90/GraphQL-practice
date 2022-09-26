const { categories, decks } = require("../db.js");

exports.Query = {
    decks: () => decks,
    deck: (parent, args, context) => {
        const productID = args.id;
        return decks.find(deck => deck.id === productID);
    },
    categories: () => categories,
    category: (parent, args, context) => {
        const { id } = args;
        return categories.find((category) => category.id === id);
    }
};