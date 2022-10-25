import './App.scss';
import Header from './Components/Header/Header.jsx'
import Main from "./Components/Main/Main.jsx";

function App() {
  return (
        <div className="App">
            <Header/>
            <div className='main-wrapper'>
                <Main />
            </div>
        </div>
  );
}

export default App;
