import React from 'react'
import Dashboard from './components/Dashboard'
import ClassSchedule from './components/ClassSchedule'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import MembershipPricing from './components/PlanAndPricing'
import GymAboutUs from './components/GymAboutUs'
import Contact from './components/Contact'
import Profile from './components/Profile'
import SignUp from './profilepage/SignUp'
import Login from './profilepage/Login'
import ForgetPassword from './profilepage/ForgetPassword'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="/Plan-Prices" element={<MembershipPricing />} />
        <Route path="/About-us" element={<GymAboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />


      </Routes>
    </Router>

    </>
  )
}

export default App
