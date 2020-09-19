'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRoutes = registerRoutes;

var _productsRoutes = require('./api/products-routes');

var _productsRoutes2 = _interopRequireDefault(_productsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
    app.use('/api', _productsRoutes2.default);
}