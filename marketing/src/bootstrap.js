import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';


// Función para renderizar la app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if(onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history}/>, el
    )

    return {
        onParentNavigate({pathname: nextPathName}) {
            const { pathname } = history.location;

            if(pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
    }
}

// Si estamos en desarrollo o ejecutandolo aisladamente
if(process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#dashboardApp');

    if(root) {
        mount( root, {
            defaultHistory: createBrowserHistory()
        });
    }
}

// Exportamos el mount para que se pueda utilizar en el container
export { mount };