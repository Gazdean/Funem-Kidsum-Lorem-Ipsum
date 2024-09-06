import './App.css'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import AddToKidictionaryKuotes from './pages/AddToKidictionaryKuotes'
import SignIn from './pages/SIgnIn'
import Profile from './pages/Profile'


function App() {

  return (
    <div>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Landing />}/>
        <Route path='/add-to-kidictionary-kuotes' element={<AddToKidictionaryKuotes />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
