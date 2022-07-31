import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { CartContext } from './context/MyContext';
import MyRoutes from './routes/MyRoutes';

function App() {
  const [cartCount, setCartCount] = useState(0)

  const data ={
    cartCount,
    setCartCount
  }

  return (
    <div className="App">
      <CartContext.Provider value={data}>
      <Header />
      <MyRoutes/>
      <Footer/>
      </CartContext.Provider>
    </div>
  );
}

export default App;
