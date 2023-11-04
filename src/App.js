import './App.css';
// /npm i react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Login from './pages/Login';
//npm i @reduxjs/toolkit react-redux
//import Provider so we can use it here
import { Provider } from 'react-redux';
// import the store.js so we can use it here for the provider
import { store } from "./store"


function App() {
  return ( 
    <div className="App">
      {/* input inside the curly braces what store variable we're gonna use here */}
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
