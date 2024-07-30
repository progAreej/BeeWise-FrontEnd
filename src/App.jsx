


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import OurStory from './pages/OurStory';
import ContactUs from './pages/ContactUs';
import Community from './pages/Community';
import Marketplace from './pages/Marketplace';
import AdminDashboard from './pages/AdminDashboard';
import Services from './pages/Services';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
// import AdminDashboard from './pages/AdminDashboard';
import StartBeekeeping from './pages/StartBeekeeping';
import Resources from './pages/Resources';
import Forum from './pages/forum';
import JoinNow from './pages/JoinNow';
import Events from './pages/Events';
import BrowseProducts from "./pages/BrowseProducts"
import SellProduct from "./pages/SellProduct"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/OurStory" element={<OurStory />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/StartBeekeeping" element={<StartBeekeeping />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/JoinNow" element={<JoinNow />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/BrowseProducts" element={<BrowseProducts />} />
            <Route path="/SellProduct" element={<SellProduct />} />

          </Routes>
        </main>
   
      </div>
    </Router>
  );
}

export default App;
