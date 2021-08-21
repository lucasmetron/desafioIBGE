import Header from './components/Header/Header';
import Estados from './components/Estados/Estados';
import Municipios from './components/Municipios/Municipios';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import estadosReducer from './store/reducers/estadosReducer';
import ufSelectedReducer from './store/reducers/ufSelectedReducer';
import municipiosReducer from './store/reducers/municipiosReducer';
import municipioSelectedReducer from './store/reducers/municipioSelectedReducer';
import MunicipioFinal from './components/MunicipioFinal/MunicipioFinal';


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
        <MunicipioFinal />
      </Provider>

    </div>
  );
}

export default App;
