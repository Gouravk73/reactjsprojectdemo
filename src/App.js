import './App.css';
import AddMedicine from './components/AddMedicine';
import ShowMedicine from './components/ShowMedicine';
import CartProvider from './store/CartProvider'
function App() {
  return (
    <CartProvider>
      <AddMedicine/>
      <ShowMedicine/>
    </CartProvider>
  );
}

export default App;
