import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a la página!'} />   
    </div>
  );
}

export default App;

