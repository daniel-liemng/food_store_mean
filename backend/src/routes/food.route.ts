import express from 'express';
import {
  getAllFoods,
  getAllTags,
  getFoodById,
  getFoodsBySearchTerm,
  getTagByName,
} from '../controllers/food.controller';

const router = express.Router();

router.get('/', getAllFoods);
router.get('/search/:searchTerm', getFoodsBySearchTerm);
router.get('/tags', getAllTags);
router.get('/tags/:tagName', getTagByName);
router.get('/:foodId', getFoodById);

export default router;
