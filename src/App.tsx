import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import CareerPage from './pages/CareerPage'
import FAQPage from './pages/FAQPage'
import SolutionPage from './pages/SolutionPage'
import ScrollToTop from './components/ui/ScrollToTop'
import QuoteDrawer from './components/ui/QuoteDrawer'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <QuoteDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carreira" element={<CareerPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/solucoes/:slug" element={<SolutionPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
