import express from 'express'

import * as db from '../db/endangeredSpecies'

const router = express.Router()

// Route to get endangered species data

router.get('/', async (req, res) => {
  try {
    // Query the database for endangered species
    const species = await db.getEndangeredSpecies()
    // Send the species data as a JSON response
    res.json({species})

    console.log(species)
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})

export default router
