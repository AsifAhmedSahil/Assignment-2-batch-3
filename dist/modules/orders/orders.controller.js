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
exports.OrderController = void 0;
const orders_validation_1 = require("./orders.validation");
const orders_services_1 = require("./orders.services");
// for order purpose use only
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validation using zod
        const zodParsedData = orders_validation_1.orderValidationSchema.parse(req.body);
        console.log("zodparse data", zodParsedData);
        const result = yield orders_services_1.OrderServices.createOrder(zodParsedData);
        res.json({
            success: true,
            message: "order is added successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: error.message || "order not found!",
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        const { email } = req.query;
        // conditions for email query and all order query
        if (email) {
            result = yield orders_services_1.OrderServices.getAllOrdersByEmail(email);
        }
        else {
            result = yield orders_services_1.OrderServices.getAllOrders();
        }
        res.json({
            success: true,
            message: email
                ? "Orders fetched successfully for user email!"
                : "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "oops , there are no orders",
            error: error,
        });
    }
});
exports.OrderController = {
    createOrder,
    getAllOrders,
};
