import "./App.css";

import CounterAppOne from "./components/Pricing";

//@ts-ignore

function App() {
  return (
    <div className="flex flex-col bg-gray-900 text-white items-center justify-center h-screen gap-5">
      <div className="text-4xl">Pricing Module</div>
      <CounterAppOne />
    </div>
  );
}

export default App;
