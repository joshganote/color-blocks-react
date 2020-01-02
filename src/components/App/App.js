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
                        <div>
                            <Link to="/">Swatches</Link>
                        </div>
                        <div>
                            <Link to="/colors/">Colors</Link>
                        </div>
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
