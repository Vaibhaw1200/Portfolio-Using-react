import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contactme from "./components/Contactme/Contactme";
import Footer from "./components/Footer/Footer";

function App() {
    return (
      <div className="App">
      <Navbar/>
      <Intro/>
<Skills/>
<Projects/>
<Contactme/>
<Footer/>

      </div>
    );
  }
  
  export default App;
  