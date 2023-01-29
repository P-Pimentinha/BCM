import {
  createCoffee,
  getAllCoffeValues,
  getSingleBarCoffeValues,
} from '../controllers/coffeeConsController.js';
import express from 'express';
const router = express.Router();

// router.route('/').post(createCoffee);
router.route('/').post(createCoffee).get(getAllCoffeValues);
router.route('/:barID').get(getSingleBarCoffeValues);
// router.route('/stats').get(showStats);
// router.route('/:id').delete(deleteBar).patch(updateBar).get(getBar);

export default router;
