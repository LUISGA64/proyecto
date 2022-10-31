const { json } = require("express")
const salesSchema = require("../models/sales");

exports.getSalesProducts = async(req, res, next) => {
    const sales = await salesSchema.find().populate("products");
    if (!sales) {
        return res.status(404).json({
            success: false,
            error: true
        })
    }
    res.status(200).json({
        success: true,
        count: sales.length,
        sales
    });
}

exports.newSales = async(req, res, next) => {
    const sales = await salesSchema.create(req.body);
    res.status(201).json({
        success: true,
        sales
    })
}