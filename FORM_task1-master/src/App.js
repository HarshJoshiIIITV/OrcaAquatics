import Home from './Form/components/Home'
import Hello from './Form/components/index'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Form/store/store'
import Header from './Components/Header.js'
// import Layout from './components/Layout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/" component={Header} />
          <Route exact path="/home" component={Home} />
        </Provider>
      </BrowserRouter>
      {/* <Layout /> */}
    </div>
  );
}

export default App;
