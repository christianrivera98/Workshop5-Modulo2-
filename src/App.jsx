import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import MyProfile from './pages/MyProfile'
import Profiles from "./pages/Profiles"
import Login from "./pages/Login"
import Signin from "./pages/Signin"
import PublicationDetails from "./pages/PublicationDetails"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}  />
        <Route path='/my-profile' element={ <MyProfile />} />
        <Route path='/profiles' element={ <Profiles />} />
        <Route path='/publication-details' element={ <PublicationDetails />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/sing-in' element={ <Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
