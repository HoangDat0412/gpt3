import './App.css';
import Brand from './components/brand/Brand';
import Cta from './components/cta/Cta';
import Navbar from './components/navbar/Navbar';
import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibility from './containers/possibiliity/Possibility';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
  );
}

export default App;
