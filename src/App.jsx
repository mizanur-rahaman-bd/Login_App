import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;
