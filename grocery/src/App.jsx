import './App.css';
import { Grocery } from './Components/Grocery';
import { GroceryList } from './Components/GroceryList';
import { GroceryInput } from './Components/GroceryInput';
function App() {
  return (
    <div className="App">
      <Grocery />
      <GroceryList />
      <GroceryInput />
    </div>
  );
}

export default App;
