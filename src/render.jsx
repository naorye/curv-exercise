import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from './store';
import './index.css';

export default function render() {
    ReactDOM.render(
        <Provider>
            <App />
        </Provider>,
        document.getElementById('root'),
    );
}
