import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reporting from './Pages/Dashboard/Reporting/Reporting';
import CompletedTasks from './Pages/Dashboard/Reporting/CompletedTasks';
import IncompleteTasks from './Pages/Dashboard/Reporting/IncompleteTasks';
import OverdueTasks from './Pages/Dashboard/Reporting/OverdueTasks';
import TotalTasks from './Pages/Dashboard/Reporting/TotalTasks';
import { ToastContainer } from 'react-toastify';
import Features from './Pages/Features/Features/Features';
import AddReviews from './Pages/Dashboard/AddReviews/AddReviews';
import SingIn from './Pages/Authentication/SignIn/SingIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import { connect } from 'react-redux'
import Projects from './Pages/Dashboard/Projects/Projects';
import Calendar from './Pages/Dashboard/Calendar/Calendar';
import {MessengerCustomerChat} from "typescript-react-facebook-messenger";
import ViewProfile from './Pages/ViewProfile/ViewProfile';





type stateProps = {
  lists: any
}


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />

        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/viewProfile" element={<ViewProfile />} />
        
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='repoting' element={<Reporting />} />
          <Route path='add-reviews' element={<AddReviews />} />
          <Route path='completedTasks' element={<CompletedTasks />} />
          <Route path='incompleteTasks' element={<IncompleteTasks />} />
          <Route path='overdueTasks' element={<OverdueTasks />} />
          <Route path='totalTasks' element={<TotalTasks />} />
          <Route path='project' element={<Projects />} />
          <Route path='calendar' element={ <Calendar/>} />

        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <MessengerCustomerChat pageId="158654895069572" appId="553013519763702"/>
      <ToastContainer />
    </div>
  );
}


const mapStateToProps = (state: stateProps) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
