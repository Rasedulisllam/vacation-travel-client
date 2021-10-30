
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Footer/Footer';
import PackageDetails from './pages/Home/PackageDetails/PackageDetails';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyBookings from './pages/MyBookings/MyBooking/MyBookings';
import NotFound from './pages/NotFound/NotFound'
import Admin from './pages/Admin/Admin/Admin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/packageDetails/:id'>
                <PackageDetails></PackageDetails>
              </PrivateRoute>
              <PrivateRoute path='/myBooking'>
                <MyBookings></MyBookings>
              </PrivateRoute>
              <PrivateRoute path='/admin'>
                <Admin></Admin>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='*'>
               <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
