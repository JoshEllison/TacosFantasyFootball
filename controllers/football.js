const express = require('express')
const router = express.Router()
const request = require('request')
const Football = require('../models/footballmods.js')

// INDEX

router.get('/injuries', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/injuries/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})



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
