const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.post('/addProperty', propertyController.createProperty);
router.get('/getProperties', propertyController.getProperties);
router.patch('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);
router.get('/:id', propertyController.getPropertyById);

module.exports = router;
