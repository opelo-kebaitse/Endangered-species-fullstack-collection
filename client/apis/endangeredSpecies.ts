import request from 'superagent'
import {
  EndangeredSpecies,
  EndangeredSpeciesData,
} from '../../models/endangeredSpecies'

const rootUrl = '/api/v1'

export async function getEndangeredSpecies() {
  const res = await request.get(rootUrl + '/species')
  return res.body.species as EndangeredSpecies[]
}

export async function addEndangeredSpecies(
  newEndangeredSpecies: EndangeredSpeciesData
) {
  const res = await request
    .post(`${rootUrl}/species`)
    .send({newEndangeredSpecies})
  return res.body.newEndangeredSpecies
}

export async function updateEndangeredSpecies(params: { id: number; updatedEndangeredSpecies: EndangeredSpeciesData }) {
  const { id, updatedEndangeredSpecies } = params;
  
  const res = await request
    .put(`${rootUrl}/species/${id}`)
    .send({ endangeredSpecies: updatedEndangeredSpecies });

  return res.body.endangeredSpecies;
}


export async function deleteEndangeredSpecies(id:number){
  const res = await request.delete(`${rootUrl}/species/${id}`)
  return res.body
}