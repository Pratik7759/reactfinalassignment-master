import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import ControlledCarousel from "./components/carousel/ControlledCarousel";
import About from "./components/about/About";
import Screenshot from "./components/screenshot/Screenshot";
import Service from "./components/services/Service";
import Blog from "./components/blog/Blog";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <About/>
      <Screenshot/>
      <Service/>
      <Blog/>
      <Form/>
      <Footer/>
      
    </div>
  );
}

export default App;
