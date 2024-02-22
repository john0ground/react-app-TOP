import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './StateSharing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Accordion />
    </React.StrictMode>,
);
