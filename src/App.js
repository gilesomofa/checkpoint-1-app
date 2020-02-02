import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'
// import { Button } from '@material-ui/core'
// import { Icons } from '@material-ui/core'


class App extends Component {
    state = {
        loggedIn: false
    }
onLoginChange = () =>{
    this.setState({loggedIn: !this.state.loggedIn})
    console.log('BomboRas')

}

render(){
    return (  
        <div className = 'Container'>
        < Navbar onLoginButtonText={ this.state.loggedIn } onLoginChange={ this.onLoginChange } />
        {this.state.loggedIn ? <Dashboard/> : 
        <p>Login</p>
          }

        
        </div>
        );
    }
}

        
export default App