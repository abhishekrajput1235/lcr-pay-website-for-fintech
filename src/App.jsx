import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './components/pages/Login'
import RegisterWithOtp from './components/pages/RegisterWithOtp'
import Home from './components/pages/Home'
import PricingPage from './components/pages/PricingPage'
import ContactusPage from './components/pages/ContactusPage'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsConditions from './components/pages/TermsConditions'
import ReturnPolicy from './components/pages/ReturnPolicy'
import RechargePage from './components/RechargePage'
import LcrPayServicesPage from './components/ServicesPage'
import DeleteUserPage from './components/pages/DeleteUserPage'
import AboutUsPage from './components/pages/AboutUsPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  

  return (
    <>
      <div className=''>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/Home/Login" element={<Login />} />
            <Route path="/signup" element={<RegisterWithOtp />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path='/recharge-utility-bills' element={<RechargePage />} />
            <Route path="/Home/Contact_Us" element={<ContactusPage />} />
            <Route path="/Home/Services" element={<LcrPayServicesPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/Home/Term_condition" element={<TermsConditions />} />
            <Route path="/Home/Return_Policy" element={<ReturnPolicy />} />
            <Route path="/Home/Delete_Account" element={<DeleteUserPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  )
}

export default App
