
import connection from "./connection";

export async function getEndangeredSpecies(db = connection){

return db ('endangered_species').select('*')
}