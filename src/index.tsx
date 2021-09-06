import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import GlobalStyles from './core/globalStyles';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GardenList from './app/views/GardenList.view';
import PlantInsert from './app/views/PlantInsert.view';
import Login from './app/views/Login.view';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/garden" exact component={GardenList} />
        <Route path="/garden/create" exact component={PlantInsert} />

      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
