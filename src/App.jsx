import './App.css'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'

import AddToKidictionaryKuotes from './pages/AddToKidictionaryKuotes'
import SignIn from './pages/SIgnIn'
import Profile from './pages/Profile'
import Register from './pages/Register'
import GetPlaceholderText from './pages/GetPlaceholderText'
import Footer from './components/footer'


export default function App() {

  return (
    <div>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Landing />}/>
        <Route path='/add-to-kidictionary-kuotes' element={<AddToKidictionaryKuotes />}/>
        <Route path='/get-place-holder-text' element={<GetPlaceholderText />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
  )
}
