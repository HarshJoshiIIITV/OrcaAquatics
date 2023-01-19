import { Route, BrowserRouter, Router } from 'react-router-dom' 
import Header from './Components/Header.js';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Squads from './Components/Squads';
import Blogs from './Components/Blogs';
import ScrollToTop from './Components/ScrollToTop';
import LearnToSwim from './Components/LearnToSwim';
import Locations from './Components/Locations';
import Competitions from './Components/Competitions';
import Gallery from './Components/Gallery';
import LiveResults from './Components/LiveResults';
import ContactUs from './Components/ContactUs';
import './App.css';

function App() {


  return (
    <div>
      
      <BrowserRouter>
      
          <Route exact path="/" component={HomePage} />
          <Route path="/squads" component={Squads}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/learn_to_swim" component={LearnToSwim} />
          <Route path="/competitions" component={Competitions} />
          <Route path="/locations" component={Locations} />
          <Route path="/gallery" component={Gallery}  />
          <Route path="/live_results" component={LiveResults}  />
          <Route path="/contact_us" component={ContactUs}  />
          <Footer/>
          <ScrollToTop/>   
      </BrowserRouter>
     
    </div>
  );
}

export default App;
