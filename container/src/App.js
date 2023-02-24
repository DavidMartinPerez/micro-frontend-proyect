import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import LoadingBar from './components/Progress'

const MarketingLazy = lazy( () => import('./components/MarketingApp') );
const AuthLazy = lazy( () => import('./components/AuthApp') );

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt'
});

export default () => {

    const [ isSignedIn, setIsSignedIn ] = useState(false)

    return (
        <div style={{border: '3px solid red'}}>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                        <Suspense fallback={<LoadingBar />}>
                            <Switch>
                                <Route path ="/auth">
                                    <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                                </Route>
                                <Route path ="/" component={MarketingLazy}></Route>
                            </Switch>
                        </Suspense>
                    </div>
                </StylesProvider>
            </BrowserRouter>
        </div>
    )
}