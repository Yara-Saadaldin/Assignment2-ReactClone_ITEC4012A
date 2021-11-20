import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Navbar} from './components/navbar/index'
import {NavbarIcons} from './components/navbar icons/index'
import {HomePage} from './components/pages/home-page'
import {TVShows} from './components/pages/tv-shows'

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <NavbarIcons/>
                <Switch>
                    <Route extract path="/HomePage">
                        <HomePage/>
                    </Route>
                    <Route path="/TVShows">
                        <TVShows/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;