import React from 'react';
import Header from '../component/Header';
import Home from '../component/Home';
import ProductList from '../component/ProductList';


const App = () => {
  return (
    <div className="app">
      <Header />
      <ProductList />
      <Home />
     
    </div>
  );
};

export default App;

