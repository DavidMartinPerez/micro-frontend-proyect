import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import LoadingBar from './components/Progress';
import { createBrowserHistory } from 'history'

const MarketingLazy = lazy( () => import('./components/MarketingApp') );
const AuthLazy = lazy( () => import('./components/AuthApp') );
const DashboardLazy = lazy( () => import('./components/DashboardApp') );

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt'
});

const history = createBrowserHistory();

export default () => {

    const [ isSignedIn, setIsSignedIn ] = useState(false)

    useEffect( () => {
        if(isSignedIn) {
            history.push('/dashboard');
        } else {
            history.push('/')
        }
    }, [isSignedIn] );

    return (
        <div style={{border: '3px solid red'}}>
            <Router history={history}>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                        <Suspense fallback={<LoadingBar />}>
                            <Switch>
                                <Route path ="/auth">
                                    <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                                </Route>
                                <Route path ="/dashboard">
                                    {!isSignedIn && <Redirect to='/'/>}
                                    <DashboardLazy/>
                                </Route>
                                <Route path ="/" component={MarketingLazy}></Route>
                            </Switch>
                        </Suspense>
                    </div>
                </StylesProvider>
            </Router>
        </div>
    )
}