# **This is a GraphQL practice**
## Used technologies:
- _Appollo server_
- _JavaScript_
- _GraphQL_
---
## How to run the app? 
### Run the command: _npm run dev_

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
