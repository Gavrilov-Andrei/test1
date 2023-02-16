import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import {AddTodo} from './components/AddTodo'
import {Provider}  from 'react-redux';
import store from './store/store'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}> 
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='AddTodo' element={<AddTodo/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
