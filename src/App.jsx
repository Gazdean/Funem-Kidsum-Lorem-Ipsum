import './App.css'
import Landing from './pages/Landing'
import Header from './components/Header'
import { Route, Routes } from 'react-router'

import AddToKidictionaryKuotes from './pages/AddToKidictionaryKuotes'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Register from './pages/Register'
import GetPlaceholderText from './pages/GetPlaceholderText'
import Footer from './components/footer'
import ResetPassword from './pages/ResetPassword'
import VerifyAccount from './pages/VerifyAccount'


export default function App() {

  return (
    <div>
      <Header />
      <div id="top-of-page" className='scroll-mt-32'></div>
      <Routes> 
        <Route path='/' element={<Landing />}/>
        <Route path='/add-to-kidictionary-kuotes' element={<AddToKidictionaryKuotes />}/>
        <Route path='/get-place-holder-text' element={<GetPlaceholderText />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/verify-account' element={<VerifyAccount />}/>
      </Routes>
      <Footer />
    </div>
  )
}
