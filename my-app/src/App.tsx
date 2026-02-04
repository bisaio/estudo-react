import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  
  const name = 'Ana'

  return (
    <div className="App">
      <SayMyName name='zé' />
      <Pessoa name={name} age={22} profession='Programadora' image='https://placehold.co/150'/>
    </div>
  );
}

export default App;
