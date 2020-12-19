import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

// including Pages ..... 
import TopBar from './component/TopBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Account from './pages/Account'



export default class FewRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: 'mamun@gmail.com',
            phone: '+0510-5454545',
            note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur quasi.'
        };
    }

    render() {
        return (
            <>
            <Router>
                <TopBar mail={this.state.mail} phone={this.state.phone} note={this.state.note}/>
                <Navbar className="navbar navbar-expand-lg few-navbar-area bg-dark">
                    <Link className="navbar-brand text-white" to="/">ThemeFew</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li><Link exact to="/">Home</Link></li>
                            <li><Link exact to="/about">About</Link></li>
                            <li><Link exact to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/account" component={Account} />
                </Switch>
            </Router>
            </>
        )
    }
}
