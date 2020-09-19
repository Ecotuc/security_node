import express from 'express';
const router = express.Router();

router.post('/order', (req, res) => {
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

router.post('/order/:id/accept-reject', (req, res) => {
    res.send({
        "status": "APPROVED/REJECTED"
    });
});

export default router;
