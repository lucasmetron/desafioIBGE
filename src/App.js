import './App.css';
import Header from './components/Header/Header';
import { createGlobalStyle } from 'styled-components'
import Estados from './components/Estados/Estados';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import estadosReducer from './store/reducers/estadosReducer';
import ufReducer from './store/reducers/ufReducer';
import municipiosReducer from './store/reducers/municipiosReducer';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
`;


function App() {
  const allReducers = combineReducers({
    estados: estadosReducer,
    UF: ufReducer,
    municipios: municipiosReducer,
  })

  const store = createStore(allReducers);

  return (
    <div>

      <Provider store={store}>
        <Header />
        <Estados />
        <GlobalStyle />
      </Provider>

    </div>
  );
}

export default App;
