
import Header from './components/Header/Header';
import DrawerComponents from './components/Drawer/DrawerComponents.jsx';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Process from './components/processSection.js/Process';
import Examble from './components/Examble/Examble';
import Features from './components/Features/Features';
import Business from './components/Bussiness/Business';
import Reviews from './components/Reviews/Reviews';
import Subscibe from './components/Subscribe/Subscibe';
import Plans from './components/Plans/Plans';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App () {
  return (
    <div className="App">
      <Header  />
      <DrawerComponents  />
      <Home />
      <Service/>
      <Process/>
      <Examble/>
      <Features/>
      <Business/>
      <Reviews/>
      <Subscibe/>
      <Plans/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
