
import './App.css';
import image from './girl.jpg';
import { WishList } from './WishList'


function App() {
  return (
    <div className="App">
       <div className="container">
      <img src={ image } width='250px' alt="list"/>
      </div>
      <div className="container">
        <h1>Wish List</h1>
      </div>
   <WishList />
    </div>
  );
}

export default App;
