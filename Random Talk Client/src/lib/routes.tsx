import { Route, createRoutesFromElements } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Chat from "../pages/Chat";

export default createRoutesFromElements(
  <>
    <Route path='/' element={<Welcome />} >
    </Route>
    <Route element={<Chat />} path='/chat' />
  </>
  )