import './App.css';
import Header from './components/Header/Header';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  font-size: 10px;

  background-color: aliceblue;
  }
`;

function App() {
  return (
    <div className="App">
      <Header />

      <GlobalStyle />
    </div>
  );
}

export default App;
