import { Outlet } from 'react-router-dom'
import EndangeredSpeciesList from './EndangeredSpeciesList'
import Nav from './Nav'

function App() {
  return (
    <>
      <header className="header">
        <h1>Endangered Species </h1>
      </header>
      <section className="main">
      </section>
      <Nav/>
      <EndangeredSpeciesList/>
      <Outlet />
    </>
  )
}

export default App
