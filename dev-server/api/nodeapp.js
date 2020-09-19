import express from 'express';
const router = express.Router();

router.get('/products', (req, res) => {
    res.send([
		{"name": "Producto",
		"sku": "Id del producto unico entre todos los productos",
		"description" : "Descripcion del producto"},

		{"name": "Producto",
		"sku": "Id del producto unico entre todos los productos",
		"description": "Descripcion del producto"}
		]);
});

export default router;
