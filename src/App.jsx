import Header from './companents/Header/Header'
import Hero from './companents/Hero/Hero'
import Benefits from './companents/Benefits/Benefits'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from './companents/Filter/Filter';
import Questions from './companents/Questions/Questions';
import Reviews from './companents/Reviews/Reviews';
import State from './companents/State/State';
import KnowBenefits from './companents/KnowBenefits/KnowBenefits';
import Footer from './companents/Footer/Footer';
import LearnMore from './companents/LearnMore/LearnMore';
import PlotDetails from './companents/Plotdetails/Plotdetails';

const Home = () => {
  return (
    <>
      <Hero />
      <Header />
      <Benefits />
      <Questions />
      <Reviews />
      <State />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route path='/' element={<Home />} />

        {/* FILTER */}
        <Route path='/filter' element={<Filter />} />

        {/* KNOW BENEFITS */}
        <Route path='/knowbenefits' element={<KnowBenefits />} />

        <Route path='/reviews' element={<Reviews />} />

        <Route path='/learnmore' element={<LearnMore />} />

        <Route path="/plot/:id" element={<PlotDetails />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App