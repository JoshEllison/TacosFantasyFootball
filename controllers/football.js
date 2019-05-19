const express = require('express')
const router = express.Router()

const Football = require('../models/footballmods.js')

// INDEX
router.get('/', (req, res) => {
    Football.find( {}, (err, foundFootballs) => {
        res.json(foundFootballs)
    });
});

// CREATE
router.post('/', (req, res) => {
  console.log(req.body);
    Football.create( req.body, (err, createdFootball) => {
        res.json(createdFootball);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    Football.findByIdAndRemove(req.params.id, (err, deletedFootball) => {
        res.json(deletedFootball);
    });
});

// EDIT
router.put('/:id', (req, res) => {
    Football.findByIdAndUpdate( req.params.id, req.body, {new:true}, (err, updatedFootball) => {
        res.json(updatedFootball);
    });
});

module.exports = router
