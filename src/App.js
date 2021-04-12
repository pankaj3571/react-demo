import './App.css';
import Nav from "./navbar";
import About from "./About";
import Contact from './Contact';
import ItemSDetail from './itemDetails';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/contact/:id" component={ItemSDetail}/>

        </Switch>
     
      </div>
    </Router>

  );
}

const Home=()=>{
 return(
  <div>
  <h1>Home Page</h1>
</div>
 )

}
export default App;
