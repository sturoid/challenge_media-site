import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import './index.css';
import App from './layout/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
