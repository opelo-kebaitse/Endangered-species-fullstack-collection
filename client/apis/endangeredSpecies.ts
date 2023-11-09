import request from 'superagent'

const rootUrl = '/api/v1'

export async function getEndangeredSpecies() {
  const res = await request.get(rootUrl + '/species')
  return res.body.species
}
