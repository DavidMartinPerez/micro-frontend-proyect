import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


// Función para renderizar la app
const mount = (el) => {
    ReactDOM.render(
        <App />, el
    )
}

// Si estamos en desarrollo o ejecutandolo aisladamente
if(process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#dashboardApp');

    if(root) {
        mount( root )
    }
}

// Exportamos el mount para que se pueda utilizar en el container
export { mount };