import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIcecreamContainer from './components/HooksIcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <CakeContainer></CakeContainer> */}
      <HooksCakeContainer></HooksCakeContainer>
      <HooksIcecreamContainer></HooksIcecreamContainer>
      <NewCakeContainer></NewCakeContainer>
      {/* <IcecreamContainer></IcecreamContainer> */}
    </div>
    </Provider>
  );
}

export default App;
