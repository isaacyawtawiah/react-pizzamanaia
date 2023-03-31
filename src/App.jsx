
import './App.css'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import About  from './Components/About'
import Pizzatypes from './Components/Pizzatypes'
import Footer from './Components/Footer'


function App() {
  

  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <About/>
    <Pizzatypes/>
    <Footer/>
  
    </div>
  )
}
export default App
