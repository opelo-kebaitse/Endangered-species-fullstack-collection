import express from 'express'

import * as db from '../db/endangeredSpecies'
import { EndangeredSpeciesData} from '../../models/endangeredSpecies'

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
    newEndangeredSpecies: EndangeredSpeciesData
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


// Route to update endangered species data


router.put('/:id', async (req, res) => {

  const {endangeredSpecies} = req.body as {endangeredSpecies: EndangeredSpeciesData}

  const id = Number(req.params.id)

  if (!endangeredSpecies || !id) {
    console.error('No data provided')
    return res.status(400).json({ error: 'Bad request' })
  }

  try {
    await db.updateEndangeredSpecies(id, endangeredSpecies)
    res.status(201).json({ endangeredSpecies: endangeredSpecies})
  } catch (error) {
    console.error('Error adding endangered species:', error)
    res.status(500).json({ error: 'Failed to update endangered animal' })
  }
})




export default router
