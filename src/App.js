import './App.css';
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js"; 
import Banner from './Components/Banner/banner';
import About from './Components/About/about';
import Product from './Components/Product/product';
import Testimonal from './Components/Testimonal/test';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
      <div id="home">
        <Banner />
      </div>
      <div id="about">
      <About/>
      </div>
      <div id="service"> 
        <Product/>
      </div>
      <div id="team">
      <Testimonal/>
      </div>  
      <div id="contact">
      <Contact/>
      </div>        
      <Footer/>
    </>
  );
}

export default App;
