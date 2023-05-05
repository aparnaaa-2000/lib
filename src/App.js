import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Home from './pages/Home';
import Wishlist from './components/Wishlist';
// import Search from './components/Find';
import Find from './components/Find';


function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/book' element={<Booklist/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/bookmark' element={<Wishlist/>}/>
      <Route path='/search' element={<Find/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
