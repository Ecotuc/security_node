'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/order', function (req, res) {
    res.send({

        "id": "compra",
        "url": "de a quien le pregunte, para poder aprobar o rechazar la compra despues",
        "product_code": "ABC123",
        "status": "PENDING",
        "unit_price": 1,
        "required_quantity": 10,
        "manufacturer_quantity": 10,
        "total_price": 10

    });
});

router.post('/order/:id/accept-reject', function (req, res) {
    res.send({
        "status": "APPROVED/REJECTED"
    });
});

exports.default = router;