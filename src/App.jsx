import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/auth/login/Login";
import NotFound from "./components/NotFound/NotFound";
import Protected from "./components/auth/Protected/Protected";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
function App() {

  const [login, setLogin] = useState(false);

  const handleLogin = () =>{
    setLogin(true)
  }


  return (
    <div className = "d-flex flex-column align-items-center">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to ="login"/>}/>
          <Route path="/login" element={<Login onLogin={handleLogin} />}/>
          <Route element={<Protected loggedIn={login}/>}>
            <Route path="/library/*" 
            element={
              <Dashboard/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
