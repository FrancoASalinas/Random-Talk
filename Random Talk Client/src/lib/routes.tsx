import { Route, createRoutesFromElements } from "react-router-dom";
import Welcome from "../pages/Welcome";

export default createRoutesFromElements(
    <Route path='/' element={<Welcome />} >
    </Route>
  )