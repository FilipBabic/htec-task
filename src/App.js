import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Boardspage from './pages/Boardspage'
import Singleboardpage from './pages/Singleboarpage';
import CardDetailsPage from './pages/Carddetailspage';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/boards" component={Boardspage} />
        <Route path="/board/:boardID" component={Singleboardpage} />
        <Route path="/card/:cardID" component={CardDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
