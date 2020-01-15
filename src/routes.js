
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './services/Layout'
import AuthLayout from './services/AuthLayout'
import InnerLayout from './services/InnerLayout'
import history from './services/history'
import Landing from './assets/sharredpages/Landing';
import ErrorPage from './assets/sharredpages/ErrorPage'
import signIn from './assets/authpages/signIn';
import signUp from './assets/authpages/signUp';
import Property from './assets/sharredpages/Property'
import Single from './assets/sharredpages/Single'
import Listing from './assets/sharredpages/Listing'

const SharredRoutes = ({component: Component, ...rest}) => (
    <Route history={history}
        {...rest}
        render={props => (
            <Layout {...props}>
                <Component {...rest} />
            </Layout>
        )}
    />  
);

const InnerRoutes = ({component: Component, ...rest}) => (
    <Route history={history}
        {...rest}
        render={props => (
            <InnerLayout {...props}>
                <Component {...rest} />
            </InnerLayout>
        )}
    />  
);

const AuthRoutes = ({component: Component, ...rest}) => (
    <Route history={history}
        {...rest}
        render={props => (
            <AuthLayout {...props}>
                <Component {...rest}/>
            </AuthLayout>
        )}
    />
);

export default class Routes extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <SharredRoutes
                        exact
                        path="/" 
                        component={Landing} />
                    <SharredRoutes
                        path="/property" 
                        component={Property} />
                    <InnerRoutes
                        path="/single" 
                        component={Single} />
                    <InnerRoutes
                        path="/listing" 
                        component={Listing} />
                    <AuthRoutes
                        path="/signin"
                        component={signIn} />
                        <AuthRoutes
                        path="/signup"
                        component={signUp} />
                    <SharredRoutes
                        component={ErrorPage} />
                </Switch>
            </Router>
        );
    }
};