import { Route,Routes } from "react-router-dom";
import AddClient from "./Components/AdminComponent/AddClient";
import AddMedecin from "./Components/AdminComponent/AddMedecin";
import AddResulta from "./Components/AdminComponent/AddResulta";
import AddTest from "./Components/AdminComponent/AddTest";
import AllClient from "./Components/AdminComponent/AllClient";
import AllMedecin from "./Components/AdminComponent/AllMedecin";
import AllResulta from "./Components/AdminComponent/AllResulta";
import AllTest from "./Components/AdminComponent/AllTest";
import Home from "./Pages/Admin/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
function App() {
  return (
            <Routes>
                  <Route path="/" element={<Home/>}>
                           <Route path="addClient" element={<AddClient/>}/>
                           <Route path="allClient" element={<AllClient/>}/> 
                           <Route path="addTest" element={<AddTest/>}/>   
                           <Route path="allTest" element={<AllTest/>}/>  
                           <Route path="allMedecin" element={<AllMedecin/>}/>  
                           <Route path="addMedecin" element={<AddMedecin/>}/>  
                           <Route path="addResulta" element={<AddResulta/>}/>  
                           <Route path="allResulta" element={<AllResulta/>}/>  
                  </Route>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            </Routes>
  );
}

export default App;
