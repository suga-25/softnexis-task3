const router = require('express').Router();
const productController = require('../controllers/productController');
const validateProduct = require('../middleware/validateProduct');
const { protect } = require('../middleware/auth');  

// CREATE
router.post('/', protect, validateProduct, productController.createProduct);

// READ ALL
router.get('/', productController.getAllProducts);

// READ BY ID
router.get('/:id', productController.getProductById);

// UPDATE
router.put('/:id', protect, validateProduct, productController.updateProduct);

// DELETE
router.delete('/:id', protect, productController.deleteProduct);

module.exports = router;
