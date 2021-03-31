import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIcecreamContainer from './components/HooksIcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <CakeContainer></CakeContainer> */}
      <HooksCakeContainer></HooksCakeContainer>
      <HooksIcecreamContainer></HooksIcecreamContainer>
      <NewCakeContainer></NewCakeContainer>
      {/* <IcecreamContainer></IcecreamContainer> */}
      <ItemContainer cake='cake'></ItemContainer>
      <ItemContainer></ItemContainer>
      <UserContainer></UserContainer>
    </div>
    </Provider>
  );
}

export default App;
