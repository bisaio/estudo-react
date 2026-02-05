import './App.css';
import EventoClick from './components/EventoClick';
import Form from './components/Form';

function App() {

  const name = 'Ana'

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <EventoClick numero={1} />
      <EventoClick numero={2} />
      <Form />
    </div>
  );
}

export default App;
