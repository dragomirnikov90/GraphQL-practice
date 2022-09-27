const { decks } = require("../db.js");

exports.Category = {
    decks: ({ id: categoryId }, { filter }, { decks }) => {
        //const categoryId = parent.id;
        const categoryDecks = decks.filter((deck) => deck.categoryId);
        let filteredCategoryDecks = categoryDecks;
        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryDecks = filteredCategoryDecks.filter(deck => {
                    return deck.onSale;
                });
            }
        }
        return filteredCategoryDecks;
        // return decks.filter((deck) => deck.categoryId === categoryId);
    }
};