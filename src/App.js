import Header from './components/header/Header.js'
import Nav from './components/nav/Nav.js'
import About from './components/about/About.js'
import Experience from './components/experience/Experience.js'
import Services from './components/services/Services.js'
import Portfolio from './components/portfolio/Portfolio.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'


const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
