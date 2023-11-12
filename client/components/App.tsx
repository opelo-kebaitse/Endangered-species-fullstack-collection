import { Outlet } from 'react-router-dom'
import EndangeredSpeciesList from './EndangeredSpeciesList'
import Nav from './Nav'

function App() {
  return (
    <>
      <header className="header">
      </header>
      <section className="main">
      </section>
      <Nav/>
      <Outlet />
    </>
  )
}

export default App
