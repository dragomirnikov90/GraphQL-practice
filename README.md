# **This is a GraphQL practice**
## Used technologies:
- _Appollo server_
- _JavaScript_
- _GraphQL_
---
## How to run the app? 
 - ### Run the command: _npm run dev_
 - ### Open _http://localhost:4000/_ in your browser
 - ### Write your query: 
```javascript
query{
  deck(id: "783747393-1212273727hhs"){
    type
    description
    image
    price
    reviews {
      rating
      comment
      title
    }
    
  }
}
```

---
## What does the application do?
_It represents a simple e-commerce store for longboards and skateboards. You can search for product, category, check the reviews etc. It is only for practice this new technologie GraphQL_.

---
## Different sections:
_The app is split to several sections. In db.js you can find the data - products, categories, review etc_.
 - _TypeDefinitions_ - add info
 - _Queries_ - add info 
 - _Resolvers - add info

_This is how to export the data from the db.js_:
```javascript
module.exports = {
    decks,
    categories,
    reviews,
};
```
_And also you must import the data from the db.js_:
```javascript
const { categories, decks } = require("../db.js");
```

_Add your filter_:
```javascript
query{
  decks(filter: {
    onSale: true
  }) {
    type
    price
    onSale
  }
}
```
_When you filter by rating it will give also the products with higher rating.
For example if you apply filter rating: 2 it will give you also the 3,4,5 rating_.
