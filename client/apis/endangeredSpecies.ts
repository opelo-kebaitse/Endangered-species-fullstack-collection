import request from 'superagent'
import {
  EndangeredSpecies,
  NewEndangeredSpecies,
} from '../../models/endangeredSpecies'

const rootUrl = '/api/v1'

export async function getEndangeredSpecies() {
  const res = await request.get(rootUrl + '/species')
  return res.body.species as EndangeredSpecies[]
}

export async function addEndangeredSpecies(
  newEndangeredSpecies: NewEndangeredSpecies
) {
  const res = await request
    .post(`${rootUrl}/species`)
    .send({newEndangeredSpecies})
  return res.body
}
