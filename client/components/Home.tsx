import { Link } from 'react-router-dom'
import EndangeredSpeciesList from './EndangeredSpeciesList'

function Home() {
  return (
    <div>
      <h3 className="page-title">
        Welcome! Bringing you awareness about endangered species
      </h3>

      <Link to="/add-species">Add Endangered Species</Link>
      <br />

      <EndangeredSpeciesList />
    </div>
  )
}

export default Home
