"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const products_model_1 = require("../products/products.model");
const orders_model_1 = require("./orders.model");
// for order purpose only
const createOrder = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, productId, quantity, price } = payLoad;
    const existingProduct = yield products_model_1.Product.findById(productId);
    if (!existingProduct) {
        throw new Error("Product not found - insert right productId please");
    }
    if (existingProduct.inventory.quantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    //   reduce product quantity after order successfully
    existingProduct.inventory.quantity -= quantity;
    //   check product is avalable or not
    existingProduct.inventory.inStock = existingProduct.inventory.quantity > 0;
    // update product information = if order is confirm then reduce the main product quantity
    yield existingProduct.save();
    //   const result = await Order.create(payLoad);
    const result = yield orders_model_1.Order.create({
        email,
        productId,
        quantity,
        price,
    });
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.Order.find();
    return result;
});
const getAllOrdersByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_model_1.Order.find({ email });
        return result;
    }
    catch (error) {
        throw new Error("Failed to retrieve all orders");
    }
});
exports.OrderServices = {
    createOrder,
    getAllOrders,
    getAllOrdersByEmail,
};
