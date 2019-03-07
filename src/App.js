import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Prompt, Redirect} from 'react-router-dom';


const Temp = (props) => {
  console.log('render Temp');
  return(
    <div>{props.test}</div>
  )
}
const User = function(params) {
  return(<h1>Welcome User {params.username}</h1>)
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  logginHandle(){
    this.setState(preState=>({
      loggedIn: !preState.loggedIn
    }));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><NavLink activeStyle={{color:'green'}} exact to="/">Home</NavLink></li>
            <li><NavLink activeStyle={{color:'green'}} exact to="/about">About</NavLink></li>
            <li><NavLink activeStyle={{color:'green'}} exact to="/user/DucAnh">User Duc Anh</NavLink></li>
            <li><NavLink activeStyle={{color:'green'}} exact to="/user/Anni">User Anni</NavLink></li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
              return(
                location.pathname.startsWith("/user") ? `Are you sure to go to ${location.pathname}` : true
              )
            }}
          />
        
          <input type="button" value={this.state.loggedIn ? "Log Out" : "Log In"} onClick={this.logginHandle.bind(this)}/>
          <Route path='/' exact strict render={
            () => {
              return(
                <h1>Home</h1>
              )
            }
          }/>

          <Route path='/about' exact strict render={
            () => {
              return(
                <h1>About</h1>
              )
            }
          }/>

          <Route path='/user/:username' exact strict render={({match})=>(
            this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
          )}>
          </Route>
        </div>

      </Router>
    );
  }
}

export default App;
