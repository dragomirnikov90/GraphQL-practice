const { categories } = require("../db.js");

exports.Deck = {
    category: (parent, args, context) => {
        const categories = context.categories;
        const categoryId = parent.categoryId;
        return categories.find((category) => category.id === categoryId);
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter((review) => review.productId === id);
    },
};