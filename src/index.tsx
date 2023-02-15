import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import {AddTodo} from './components/AddTodo'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='AddTodo' element={<AddTodo/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
