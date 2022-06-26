import Home from './Form/components/Home'
import Hello from './Form/components/index'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Form/store/store'
import Header from './Components/Header.js';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage'

// import Layout from './components/Layout'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={Home} />
        </Provider>
      </BrowserRouter>
      <Footer/>
      {/* <Layout /> */}
    </div>
  );
}

export default App;
