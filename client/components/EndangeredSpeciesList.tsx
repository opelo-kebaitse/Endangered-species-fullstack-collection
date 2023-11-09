interface EndangeredSpecies {
  id: number;
  name: string;
  population: number;
}

const EndangeredSpeciesList = () => {


  const speciesData: EndangeredSpecies[] = [
    { id: 1, name: 'Sumatran Rhino', population: 80 },
    { id: 2, name: 'Amur Leopard', population: 84 },
    { id: 3, name: 'Blue Whale', population: 10000 },
    { id: 4, name: 'Giant Panda', population: 1864 },
    { id: 5, name: 'Hawksbill Turtle', population: 8000 }
  ];


  return (
    <div>
      <h2>Endangered Species List</h2>
      <ul>
        {speciesData.map((species) => (
          <li key={species.id}>
            <p>Name: {species.name}</p>
            <p>Population: {species.population}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EndangeredSpeciesList;