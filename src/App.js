import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

import './App.css';
import ProductListing from './components/ProductListing/productlisting.js';



const App=()=> {
  return (
    <div className="App">
      <Header/>
      <ProductListing/>
      <Footer/>
    </div>
  );
}

export default App;
