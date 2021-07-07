import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({condition, children, redirectTo, ...rest }) => {
    return (
        <Route {...rest} render={() => 
            condition ? 
            children :
            <Redirect to={redirectTo} />
        }/>
    )
}

export default PrivateRoute
