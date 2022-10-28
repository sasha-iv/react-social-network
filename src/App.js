import './App.scss';
import Main from "./Components/Main/Main.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {
  return (
        <div className="App">
            <HeaderContainer/>
            <div className='main-wrapper'>
                <Main/>
            </div>
        </div>
  );
}

export default App;
