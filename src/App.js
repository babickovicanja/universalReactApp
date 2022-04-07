import React from "react"
import {Routes, Route, Redirect} from "react-router-dom"

import Login from "./pages/Login"
import Users from "./pages/Users"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/users" element={<Users />}></Route>
    </Routes>
  )
}

export default App