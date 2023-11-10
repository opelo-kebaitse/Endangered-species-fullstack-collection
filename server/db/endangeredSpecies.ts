import connection from './connection'
import { NewEndangeredSpecies } from '../../models/endangeredSpecies'

export async function getEndangeredSpecies(db = connection) {
  return db('endangered_species').select('*')
}

export async function addEndangeredSpecies(
  newEndangeredSpecies: NewEndangeredSpecies,
  db = connection
) {
  return db('endangered_species').insert({
    name: newEndangeredSpecies.name,
    population: newEndangeredSpecies.population,
  })
}
