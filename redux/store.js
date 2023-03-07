import { compareReducer } from "./compare.slice";

const { configureStore } = require("@reduxjs/toolkit");
const { cartReducer } = require("./cart.slice");

const reducer = {
    cart : cartReducer,
    compare : compareReducer
};

const store = configureStore({
    reducer,
});

export default store;