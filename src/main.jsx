import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Live from './Pages/Live/Live'
import About from './Pages/About/About'
import Ark from './Pages/Servers/Ark Survival/Ark'
import PrivacyPolicy from './Pages/Support/PrivPolicy';
import Terms from './Pages/Support/Toc';
import Error404 from './Pages/Error404'
import Minecraft from './Pages/Servers/Minecraft/Craft'
import Contact from './Pages/Contact/Contact'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/live' element={<Live />} />
      <Route path='/servers/ark' element={<Ark />} />
      <Route path='/servers/minecraft' element={<Minecraft />} />
      <Route path='/legal/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/legal/terms-of-service' element={<Terms />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  </Router>
)
