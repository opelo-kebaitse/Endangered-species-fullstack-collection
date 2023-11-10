import { Route, createRoutesFromElements } from 'react-router-dom'

import AddEndangeredSpeciesForm from "./components/AddEndangeredSpeciedForm";
import App from "./components/App";
import Home from './components/Home';



export const routes = createRoutesFromElements (

  <Route path="/" element={<App/>}>
    <Route index element={<Home/>} />
    
    <Route path="/add-species" element={<AddEndangeredSpeciesForm />} />
  
  
  </Route>
)