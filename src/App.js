import './App.scss';
import Main from "./Components/Main/Main.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Footer from './Components/Footer/Footer'

function App() {
  return (
        <div className="App">
            <HeaderContainer/>
            <div className='main-wrapper'>
                <Main/>
            </div>
            {/*<Footer/>*/}
        </div>
  );
}

export default App;
