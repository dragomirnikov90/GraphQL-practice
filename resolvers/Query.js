const { categories, decks, reviews } = require("../db.js");

exports.Query = {
    decks: (parent, { filter }, { db }) => {
        let filteredDecks = db.decks;

        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale) {
                filteredDecks = filteredDecks.filter(deck => {
                    return deck.onSale;
                });
            }

            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredDecks = filteredDecks.filter((deck) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach(review => {
                        if (review.productId === deck.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgDeckRating = sumRating / numberOfReviews;

                    return avgDeckRating >= avgRating;

                })
            }
        }
        return filteredDecks;
    },
    deck: (parent, args, { db }) => {
        const productID = args.id;
        return db.decks.find(deck => deck.id === productID);
    },
    categories: (parent, args, { db }) => db.categories,
    category: (parent, args, { db }) => {
        const { id } = args;
        return db.categories.find((category) => category.id === id);
    }
};