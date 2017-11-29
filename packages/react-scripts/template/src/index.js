import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/Passwordcomponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
