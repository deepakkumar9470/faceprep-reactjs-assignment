import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import authReducer, { loadUser } from './redux/authSlice';


const store = configureStore({
    reducer  : {
       auth     : authReducer,
    }
 });
 
store.dispatch(loadUser(null))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        
        <App />
    </Provider>
);

