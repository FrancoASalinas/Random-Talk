import { Route, createRoutesFromElements } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Chat from "../pages/Chat";
import ChatPage from "../pages/ChatPage";

export default createRoutesFromElements(
  <>
    <Route path='/' element={<Welcome />}></Route>
    <Route element={<ChatPage/>} path='/chat' />
  </>
);
