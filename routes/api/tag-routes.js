import express from 'express';
import { Tag, Product, ProductTag } from '../../models/index.js';

const router = express.Router();

// The `/api/tags` endpoint

router.get('/', (_req, res) => {
  // find all tags
  Tag.findAll({
    include: [Product]
  }).then((tags) => res.json(tags))
  // be sure to include its associated Products
  .catch((error) => res.status(400).json(error))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((tags) => res.json(tags))

  .catch((error) => res.status(400).json(error))
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tags) => res.status(200).json(tags))

  .catch((error) => res.status(400).json(error))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then((tags) => res.status(200).json(tags))

  .catch((error) => res.status(400).json(error))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    },
  }).then((tags) => res.status(200).json(tags))

  .catch((error) => res.status(400).json(error))
});

export default router;
