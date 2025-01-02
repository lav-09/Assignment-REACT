import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Team from './Team';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import './app.css';

const App = () => (
  <div>
    <Header />
    <main>
      <Home />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
