import mongoose from 'mongoose';
import { Router } from 'express';
import Shop from '../model/shop';
import bodyParser from 'body-parser';

export default({ config, db }) => {
  let api = Router();

  // Post
  api.post('/add', (req, res) => {
    let newShop = new Shop(req.body);
    newShop.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({message: 'article ajouté avec succès!', newShop})
    });
  });

  // Get
  api.get('/', (req, res) => {
    Shop.find({}, (err, shops) => {
      if (err) {
        res.send(err);
      }
      res.json(shops);
    });
  });

  // Get by ID
  api.get('/:id', (req, res) => {
    Shop.find({_id : req.params.id}, (err, shop) => {
      if (err) {
        res.send(err);
      }
      res.json(shop);
    });
  });

  // Put
  api.post('/:id', (req, res) => {
    Shop.findOneAndUpdate({_id : req.params.id}, req.body, (err, shop) => {
      if (err) {
        res.send(err);
      }
      res.json(shop)
    })
  });

  // Delete
  api.delete('/:id', (req, res) => {
    Shop.remove({_id : req.params.id}, (err, shop) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Supprimé avec succès'});
    });
  });

  return api;
}
