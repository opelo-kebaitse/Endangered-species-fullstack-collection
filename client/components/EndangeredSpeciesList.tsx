import { useQuery } from '@tanstack/react-query'
import { getEndangeredSpecies } from '../apis/endangeredSpecies'

// interface EndangeredSpecies {
//   id: number;
//   name: string;
//   population: number;
// }

export default function EndangeredSpeciesList() {
  const {
    data: species,
    isLoading,
    error,
  } = useQuery(['endangeredSpecies'], getEndangeredSpecies)

  if (error instanceof Error) {
    return <p> Something went wrong: {error.message}</p>
  }

  if (!species || isLoading) {
    return <p> Still loading ... </p>
  }

  // const speciesData: EndangeredSpecies[] = [
  //   { id: 1, name: 'Sumatran Rhino', population: 80 },
  //   { id: 2, name: 'Amur Leopard', population: 84 },
  //   { id: 3, name: 'Blue Whale', population: 10000 },
  //   { id: 4, name: 'Giant Panda', population: 1864 },
  //   { id: 5, name: 'Hawksbill Turtle', population: 8000 }
  // ];

  return (
    <div>
      <h2>Endangered Species List</h2>
      <ul>
        {species.map((species) => (
          <li key={species.id}>
            <p>Name: {species.name}</p>
            <p>Population: {species.population}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}


