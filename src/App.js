
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import Details from './Components/Details/Details'


function App() {
  return (
    <div id="container">
      <Header />
      <Switch>
        <Route path = '/' exact component={HomePage} />
        <Route path = '/details/:id' exact component={Details} />
        
        
      </Switch>
      <Footer />
    </div >
  );
}

export default App;
