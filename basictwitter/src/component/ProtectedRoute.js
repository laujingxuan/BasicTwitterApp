import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        //Need to define the authentication
        const isAuthenticated = true;
       
        return isAuthenticated ? (
            <Component user = {this.props.user}/>
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;