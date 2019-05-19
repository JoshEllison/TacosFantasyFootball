const express = require('express')
const router = express.Router()
const request = require('request')
const Football = require('../models/footballmods.js')
const api = 'https://www.fantasyfootballnerd.com/service/'
const apiKey = 'iqiam5yq7fm7'

// INDEX

router.get('/injuries', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/injuries/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})

router.get('/depthCharts', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/depth-charts/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})

router.get('/weeklyRankings', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/weekly-rankings/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})

router.get('/weeklyIDP', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/weekly-idp/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})

router.get('/weeklyProjections', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/weekly-projections/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})

router.get('/draftIDP', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/draft-idp/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})

router.get('/draftRankings', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/draft-rankings/json/iqiam5yq7fm7/', (error, response, body) => {
    console.log('error:', error);
    res.json(response)
  })
})

router.get('/draftProjections', (req, res) => {
  request('https://www.fantasyfootballnerd.com/service/draft-projections/json/iqiam5yq7fm7/', (error, response, body) => {
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
