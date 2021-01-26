import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from "./Auth"

//destructure rest of the props passed in into ...rest
const ProtectedRoute = ({component:Component, ...rest})=>{
    return (
        <Route
        {... rest}
        render = {props => {
            if (auth.isAuthenticated()){
                return <Component {...props}/>;
                ////user will be saved in session                
                // return <Component {...props} user = {rest.user}/>;
                
            }else{
                return <Redirect to={{ pathname: '/login' }} />;
            }
        }}
        />
    )
}

////Class way of doing protected route
// class ProtectedRoute extends React.Component {

//     render() {
//         const Component = this.props.component;
       
//         if (auth.isAuthenticated()){
//             return <Component user = {this.props.user}/>;
//         }else{
//             return <Redirect to={{ pathname: '/login' }} />;
//         }
//     }
// }

export default ProtectedRoute;