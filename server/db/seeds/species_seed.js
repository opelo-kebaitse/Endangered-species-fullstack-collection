/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('endangered_species').del()
  await knex('endangered_species').insert([
    { id: 1, name: 'Sumatran Rhino', population: 80 },
    { id: 2, name: 'Amur Leopard', population: 84 },
    { id: 3, name: 'Blue Whale', population: 10000 },
    { id: 4, name: 'Giant Panda', population: 1864 },
    { id: 5, name: 'Hawksbill Turtle', population: 8000 }
  ])
}
