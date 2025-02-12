import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { BrowserRouter,Route, Router, Routes } from "react-router-dom"
import Home from "./Components/home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import SignUp from './components/login-register/SignUp';
import SignIn from './components/login-register/SignIn';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';
import Orders from './components/profile/Orders';

function App() {


  return (
<BrowserRouter>

<Routes>
  <Route path="/" exact={true} element={<> <Header/> <Home /> <Footer /> </>}/>
  <Route path='/login' element={ <SignIn /> } />
        <Route path='/register' element={ <SignUp /> } />
        <Route path='/product/:id' element={ <> <Header/> <Product /> <Footer /> </> } />
        <Route path='/cart' element={ <> <Header/> <Cart /> <Footer /> </> } />
        <Route path='/profile' element={ <> <Header/> <Profile /> <Footer /> </> } />
        <Route path='/orders' element={ <> <Header/> <Orders /> <Footer /> </> } />
</Routes>
</BrowserRouter>
  )
}

export default App
