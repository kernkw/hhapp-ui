import React, { Component } from 'react';
import Layout from './components/Layout';
import { auth, storageKey } from './firebase.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

class App extends Component {
  state = {
    uid: null,
    user: null,
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({ uid: user.uid });
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({ uid: null });
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
