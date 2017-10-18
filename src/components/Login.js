import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { auth, provider } from '../firebase.js';

const style = {
    chip: {
        margin: 4,
      },
    margin: 12,
};

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }

    handleChange(e) {
        /* ... */
    }
    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }
    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    render() {
        return (
            <div className="wrapper">
                {this.state.user ?
                    <Chip
                        onRequestDelete={this.logout}
                        containerElement={<Link to={{ pathname: "/account"}} />}
                        style={style.chip}>
                        <Avatar src={this.state.user.photoURL} />
                        {this.state.user.displayName || this.state.user.email}
                    </Chip>
                    :
                    <RaisedButton onClick={this.login} label="Log In" primary={true} style={style} />
                }
            </div>
        )
    }
}

export default Login;