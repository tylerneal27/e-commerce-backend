import express from 'express';
import { Category, Product } from '../../models/index.js';

const router = express.Router();

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  }).then((categories) => res.json(categories))
  // be sure to include its associated Products
  .catch((error) => res.status(400).json(error))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((categories) => res.json(categories))

  .catch((error) => res.status(400).json(error))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((categories) => res.status(200).json(categories))

  .catch((error) => res.status(400).json(error))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then((categories) => res.status(200).json(categories))

  .catch((error) => res.status(400).json(error))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    },
  }).then((categories) => res.status(200).json(categories))

  .catch((error) => res.status(400).json(error))
});

export default router;
