import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Animals from './Animals.jsx';
import { PhotographerImg, DogImg } from './Images.jsx';
import AppAnimals from './ConditionalRender.jsx';
import TodoList from './KeysToDos.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
);
