import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar></NavBar>
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/create' component={Create}></Route>
            <Route exact path='/blogs/:id' component={BlogDetails}></Route>
            <Route exact path='*' component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
