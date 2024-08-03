

## How to run
- to run the app run script `npm run dev` in the terminal

## Service description
user can import file `Tech99Test.postman_collection.json` to Postman to run
- `POST http://localhost:3000/api/products/createProduct`: create new product
- `PUT http://localhost:3000/api/products/updateProduct`: update one product
- `DELETE http://localhost:3000/api/products/removeProduct/:id`: remove a product
- `GET http://localhost:3000/api/products/listProduct`: to view all product

## DB Description
- The DB using in this app is MongoDB Cloud
- connection string: `mongodb+srv://ngngoctrung1997:00fUdhyjGWdAZfxF@test.spsj8ym.mongodb.net/?retryWrites=true&w=majority&appName=Test`
- DB name: `test`
