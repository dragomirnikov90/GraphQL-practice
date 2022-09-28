const { categories } = require("../db.js");

exports.Deck = {
    category: (parent, args, { db }) => {
        //const categories = context.categories;
        const categoryId = parent.categoryId;
        return db.categories.find((category) => category.id === categoryId);
    },
    reviews: ({ id }, args, { db }) => {
        return db.reviews.filter((review) => review.productId === id);
    },
};