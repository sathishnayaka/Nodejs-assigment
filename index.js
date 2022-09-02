const express = require('express')
const app = express()
const port = 3000
const products = [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          },
          {
            id: 2,
            title: "Vivo V9",
            description: "A camera Phone",
            price: 150,
            discountPercentage: 12.96,
            rating: 3.69,
            "stock": 94,
            "brand": "Vivo",
            "category": "smartphones",
            "thumbnail": 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          },
          {
            id: 3,
            title: "Samsung ",
            description: "A camera Phone",
            price: 250,
            discountPercentage: 22.96,
            rating: 3.69,
            stock: 94,
            brand: "samsung",
            category: "smartphones",
            thumbnail: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          },{
            id: 4,
            title: "Samsung s7",
            description: "A camera Phone",
            price: 350,
            discountPercentage: 22.96,
            rating: 4.09,
            stock: 94,
            brand: "samsung",
            category: "smartphones",
            thumbnail: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          },{
            id: 5,
            title: "Samsung galaxy",
            description: "A camera Phone",
            price: 120,
            discountPercentage: 22.96,
            rating: 3.69,
            stock: 94,
            brand: "samsung",
            category: "smartphones",
            thumbnail: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          },{
            id: 3,
            title: "Samsung s22 ultra",
            description: "A camera Phone",
            price: 280,
            discountPercentage: 22.96,
            rating: 3.69,
            stock: 94,
            brand: "samsung",
            category: "smartphones",
            thumbnail: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          },
          {
            id: 5,
            title: "iPhone 13 pro max",
            description: "Supports MagSafe accessories for easy attachment and faster wireless charging",
            price: 100,
            discountPercentage: 10,
            rating: 4.89,
            stock: 105,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://m.media-amazon.com/images/I/61sDyXAepuL._SX679_.jpg'
          },
          {
            id: 6,
            title: "Apple iPhone 13 (256GB) - Pink",
            description: "Supports MagSafe accessories for easy attachment and faster wireless charging",
            price: 959,
            discountPercentage: 15,
            rating: 4.89,
            stock: 121,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://images-eu.ssl-images-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg'
          },
          {
            id: 7,
            title: "Apple iPhone 12 (128GB) - Blue",
            description: "Supports MagSafe accessories for easy attachment and faster wireless charging",
            price: 89,
            discountPercentage: 12,
            rating: 4.89,
            stock: 58,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://images-eu.ssl-images-amazon.com/images/I/41xssMLI2DL._SY445_SX342_QL70_FMwebp_.jpg'
          },
          {
            id: 8,
            title: "Apple iPhone SE (128 GB) - (Product) RED (3rd Generation)",
            description: "Supports MagSafe accessories for easy attachment and faster wireless charging",
            price: 890,
            discountPercentage: 12,
            rating: 4.89,
            stock: 12,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://m.media-amazon.com/images/I/61A0Zu4K-TL._SX466_.jpg'
          },
          {
            id: 9,
            title: "Apple iPhone 13 Mini (256 GB) - Green",
            description: "Supports MagSafe accessories for easy attachment and faster wireless charging",
            price: 680,
            discountPercentage: 12,
            rating: 4.89,
            stock: 12,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://m.media-amazon.com/images/I/61cMQeVEGKL._SX466_.jpg'
          },
          {
            id: 10,
            title: "Apple iPhone 12 Mini (128GB) - Black",
            description: "Supports MagSafe accessories for easy attachment and faster wireless charging",
            price: 179,
            discountPercentage: 15,
            rating: 4.89,
            stock: 12,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://m.media-amazon.com/images/I/71uuDYxn3XL._SX466_.jpg'
          },

]

const CartItems = [];
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/products',(req, res) => {
    res.render('products', {
        products
    })
})

app.get('/product/:id',(req,res) =>{
    const prod = products.filter((prod)=> prod.id == req.params.id);
    const product = prod[0];
    res.render('product', {product});
})
app.get('/cart/:id',(req,res) =>{


})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})