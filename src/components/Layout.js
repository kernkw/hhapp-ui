import Header from './Header'
import Main from './Main'
// import Footer from './Footer'
import React, { Component } from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
             </div>
        )
    }
}

export default Layout;