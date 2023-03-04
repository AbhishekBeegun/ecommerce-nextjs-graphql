const { configureStore } = require("@reduxjs/toolkit");
const { cartReducer } = require("./cart.slice");

const reducer = {
    cart : cartReducer,
};

const store = configureStore({
    reducer,
});

export default store;