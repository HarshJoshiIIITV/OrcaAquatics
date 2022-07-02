import { Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header.js';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        
          <Route exact path="/" component={HomePage} />
        
       
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
