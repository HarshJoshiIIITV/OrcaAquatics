import { Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header.js';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage'
import ScrollToTop from './Components/ScrollToTop'
import { useRef } from 'react'
function App() {
  
const firstItemRef = useRef(null);
  return (
    <div>
      <Header firstItemRef={firstItemRef} />
      <BrowserRouter>
        
          {/* <Route exact path="/" component={HomePage} /> */}
        
        <HomePage firstItemRef={firstItemRef}/>
      </BrowserRouter>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
