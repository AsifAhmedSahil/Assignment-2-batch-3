"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// for product purpose only
router.post("/", product_controller_1.ProductController.createProduct);
router.get("/", product_controller_1.ProductController.getAllProducts);
router.get("/:productId", product_controller_1.ProductController.getProductById);
router.delete("/:productId", product_controller_1.ProductController.deletedById);
router.put("/:productId", product_controller_1.ProductController.updateById);
// error handling for routes
router.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
exports.ProductRoutes = router;
