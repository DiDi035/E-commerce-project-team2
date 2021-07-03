const express = require("express");

module.exports = ({ customerController }) => {
    const router = express.Router();

    router.get("/:id", customerController.get);
    router.get("/", customerController.index);
    router.put("/:id", customerController.update);

    return router;
};