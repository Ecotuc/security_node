'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/products', function (req, res) {
		res.send([{ "name": "Producto",
				"sku": "Id del producto unico entre todos los productos",
				"description": "Descripcion del producto" }, { "name": "Producto",
				"sku": "Id del producto unico entre todos los productos",
				"description": "Descripcion del producto" }]);
});

exports.default = router;