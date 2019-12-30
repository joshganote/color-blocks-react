import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// COMPONENTS
import Swatches from '../Swatches/Swatches';
import Colors from '../Colors/Colors';


// ROUTES


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <Route exact path="/" component={Swatches} />
                        <Route exact path="/colors/" component={Colors} />
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Swatches</Link>
                            </li>
                            <li>
                                <Link to="/colors/">Colors</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        PAGE CONTENT
                    </div>

                </Router>
            </div>
        );
    }
}

export default App;
