import React from 'react';
import MainRoute from './routes/main-route';
import { Provider } from "unistore/react";
import { store } from "./store";
import './styles/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
