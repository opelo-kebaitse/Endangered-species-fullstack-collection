import express from 'express'

import * as db from '../db/endangeredSpecies'
import { NewEndangeredSpecies } from '../../models/endangeredSpecies'

const router = express.Router()

// Route to get endangered species data

router.get('/', async (req, res) => {
  try {
    // Query the database for endangered species
    const species = await db.getEndangeredSpecies()
    // Send the species data as a JSON response
    res.json({ species })

    console.log(species)
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})

// Route to add endangered species data

router.post('/', async (req, res) => {
  const { newEndangeredSpecies } = req.body as {
    newEndangeredSpecies: NewEndangeredSpecies
  }

  if (!newEndangeredSpecies) {
    console.error('No data provided')
    return res.status(400).json({ error: 'Bad request' })
  }

  try {
    await db.addEndangeredSpecies(newEndangeredSpecies)
    res.status(201).json({ newEndangeredSpecies: newEndangeredSpecies })
  } catch (error) {
    console.error('Error adding endangered species:', error)
    res.status(500).json({ error: 'Failed to add endangered animal' })
  }
})

export default router
