import './App.css';
import RenderizacaoCondicional from './components/RenderizacaoCondicional';
import RenderList from './components/RenderList';

function App() {

  const lista = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <RenderList itens={lista}/>
      <RenderList itens={[]}/>
    </div>
  );
}

export default App;
