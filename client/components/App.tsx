import { Outlet } from 'react-router-dom'
import EndangeredSpeciesList from './EndangeredSpeciesList'
import Nav from './Nav'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <EndangeredSpeciesList />
      </section>
      <Nav/>
      {/* <Outlet /> */}
    </>
  )
}

export default App
