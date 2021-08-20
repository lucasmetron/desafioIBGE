import './App.css';
import Header from './components/Header/Header';
import { createGlobalStyle } from 'styled-components'
import Estados from './components/Estados/Estados';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
`;




function App() {
  return (
    <div>
      <Header />
      <Estados />

      <GlobalStyle />
    </div>
  );
}

export default App;
