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
exports.ProductServices = void 0;
const products_model_1 = require("./products.model");
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.create(payLoad);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.find();
    return result;
});
const getProductBySearch = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.find({
        name: { $regex: searchTerm, $options: "i" },
    });
    return result;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findById(id);
    return result;
});
const updateById = (productId, updatedProductData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(updatedProductData);
    const result = yield products_model_1.Product.updateOne({ _id: productId }, updatedProductData);
    return result;
});
const deletedById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findByIdAndDelete(id);
    return result;
});
exports.ProductServices = {
    createProduct,
    getAllProducts,
    getProductById,
    deletedById,
    updateById,
    getProductBySearch,
};
