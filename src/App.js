
import { BrowserRouter,Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Home></Home>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
