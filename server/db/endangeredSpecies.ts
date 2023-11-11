import connection from './connection'
import {
  EndangeredSpeciesData,
} from '../../models/endangeredSpecies'

export async function getEndangeredSpecies(db = connection) {
  return db('endangered_species').select('*')
}

export async function addEndangeredSpecies(
  newEndangeredSpecies: EndangeredSpeciesData,
  db = connection
) {
  return db('endangered_species').insert({
    name: newEndangeredSpecies.name,
    population: newEndangeredSpecies.population,
  })
}

export async function updateEndangeredSpecies(
  id: number,
  updatedEndangeredSpecies: EndangeredSpeciesData,
  db = connection
) {
  return db('endangered_species')
    .where({ id })
    .update({
      name: updatedEndangeredSpecies.name,
      population: updatedEndangeredSpecies.population,
    })
}
