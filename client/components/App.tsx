import { Outlet } from 'react-router-dom'
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
