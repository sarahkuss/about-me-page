import About from './components/About';
import PicCarousel from './components/PicCarousel';
import Footer from './components/Footer';
import Grid from './components/Grid';
import HeroBanner from './components/HeroBanner';
import Quote from './components/Quote';
import Video from './components/Video';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <About />
      <Quote />
      <Grid />
      <PicCarousel />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
