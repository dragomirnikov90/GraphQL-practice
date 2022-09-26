const { decks } = require("../db.js");

exports.Category = {
    decks: (parent, args, context) => {
        const categoryId = parent.id;
        return decks.filter((deck) => deck.categoryId === categoryId);
    }
};