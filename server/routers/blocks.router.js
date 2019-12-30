// ----------------------------------------------------------------------
// BLOCKS ROUTER
// for interacting with the `blocks` table data and relational references
// ----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// BASE MODE - make a route to get all saved color blocks
router.get('/', (req, res) => {
    // the data from both the "colors" and "blocks" tables will be need
    const queryText = `SELECT * FROM "blocks"
    JOIN "colors" ON "blocks"."color_id" = "colors"."id";`;

    pool.query(queryText)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        console.log('error getting blocks', err);
        res.sendStatus(500);
    })
});

// BASE MODE - make a route to save new color blocks item

// BASE MODE - make a route to delete a specific color block

module.exports = router;
