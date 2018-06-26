import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/index';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
