 import './App.css';
import { Item } from './components/Item';
import Cart from './components/Cart';
function App() {
  
  return (
    <div className="App">
     <Item name = "Macbook Pro" price = {100000} />
     <Item name = "Pen Drive" price = {4000} />
     <Item name = "Mobile" price = {40000} />
     <Cart/>
    </div>
  );
}

export default App;
