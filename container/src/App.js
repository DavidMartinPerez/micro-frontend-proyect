import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt'
});

export default () => {
    return (
        <div style={{border: '3px solid blue'}}>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header />
                        <MarketingApp />
                    </div>
                </StylesProvider>
            </BrowserRouter>
        </div>
    )
}