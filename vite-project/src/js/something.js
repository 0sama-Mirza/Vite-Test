// const getCommentData = async function () {
//   const fakeData = await fetch('https://jsonplaceholder.typicode.com/comments');
//   const fakeDataJson = await fakeData.json();

//   return { name: fakeDataJson.at(-1).name, email: fakeDataJson.at(-1).email };
// };

// // getCommentData().then(lastData => console.log(lastData));

// const lastData = await getCommentData();
// console.log(lastData);

// const ShoppingCart2 = (function () {
//   const shippingCost = 10;
//   const cart = [];
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier.`);
//   };

//   return {
//     shippingCost,
//     cart,
//     addToCart,
//     orderStock,
//   };
// })();
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);
// ShoppingCart2.addToCart('apple', 69);
// ShoppingCart2.addToCart('Banana', 420);
// ShoppingCart2.orderStock('apple', 69);
// ShoppingCart2.orderStock('Banana', 420);
// console.log(ShoppingCart2.cart);

import add, { cart } from './shoppingCart.js';
add('Pizza', 5);
add('Bread', 6);
add('Apple', 9);
console.log(cart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'Apple', quantity: 6 },
    { product: 'Banana', quentity: 9 },
  ],
  user: { loggedIn: true, Over18: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }
