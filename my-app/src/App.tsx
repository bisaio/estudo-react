import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const name = 'Ana'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <SayMyName name='zé' />
      <Pessoa name={name} age={22} profession='Programadora' image='https://placehold.co/150' />
      <List />
    </div>
  );
}

export default App;
