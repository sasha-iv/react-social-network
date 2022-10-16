import './App.scss';
import Header from './Components/Header/Header.jsx'
import Main from "./Components/Main/Main.jsx";
import store from "./Redux/state";

function App(props) {
  return (
        <div className="App">
            <Header/>
            <div className='main-wrapper'>
                <Main mainState={props.state} store={store} dispatch={store.dispatch.bind(store)}/>
            </div>
        </div>

  );
}

export default App;
