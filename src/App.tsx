import './App.css';

import CounterAppOne from './components/Pricing';

//@ts-ignore

function App() {
  return (
    <div className="App">
      <h1>Pricing</h1>
      <CounterAppOne />

      <h1 className='text-green-700'>I am remote</h1>
    </div>
  );
}

export default App;
