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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validation using zod
        const zodParsedData = product_validation_1.productValidationSchema.parse(req.body);
        const result = yield product_service_1.ProductServices.createProduct(zodParsedData);
        res.json({
            success: true,
            message: "Product is added successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "Product is not added successfully",
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        const { searchTerm } = req.query;
        if (searchTerm) {
            result = yield product_service_1.ProductServices.getProductBySearch(searchTerm);
        }
        else {
            result = yield product_service_1.ProductServices.getAllProducts();
        }
        res.json({
            success: true,
            message: searchTerm
                ? `Products matching search term ${searchTerm} fetched successfully!`
                : "All Products Retrieved Successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: true,
            message: "Product is not retrive successfully",
            error: error,
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getProductById(productId);
        res.json({
            success: true,
            message: `productId: ${productId}  Retrive successfully`,
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: true,
            message: "There are no product ",
            error: error,
        });
    }
});
const updateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedProductData = req.body;
        const result = yield product_service_1.ProductServices.updateById(productId, updatedProductData);
        res.json({
            success: true,
            message: " Products updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "Product is not updated ",
            error: error,
        });
    }
});
const deletedById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        console.log(productId, "delete");
        const result = yield product_service_1.ProductServices.deletedById(productId);
        res.json({
            success: true,
            message: " Products deleted successfully from database",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: true,
            message: "Product is not deleted successfully",
            error: error,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProducts,
    getProductById,
    deletedById,
    updateById,
};
