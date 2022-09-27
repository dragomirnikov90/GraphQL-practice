const { categories, decks, reviews } = require("../db.js");

exports.Query = {
    decks: (parent, { filter }, { decks }) => {
        let filteredDecks = decks;

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
                    reviews.forEach(review => {
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