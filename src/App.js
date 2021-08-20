import './App.css';
import Header from './components/Header/Header';
import Estados from './components/Estados/Estados';
import Municipios from './components/Municipios/Municipios';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector } from 'react-redux';
import estadosReducer from './store/reducers/estadosReducer';
import ufSelectedReducer from './store/reducers/ufSelectedReducer';
import municipiosReducer from './store/reducers/municipiosReducer';
import municipioSelectedReducer from './store/reducers/municipioSelectedReducer';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const allReducers = combineReducers({
    estados: estadosReducer,
    municipios: municipiosReducer,
    ufSelecionada: ufSelectedReducer,
    municipioSelecionado: municipioSelectedReducer,

  })
  const store = createStore(allReducers);

  return (
    <div>

      <Provider store={store}>
        <Header />
        <Estados />
        <Municipios />

      </Provider>

    </div>
  );
}

export default App;
