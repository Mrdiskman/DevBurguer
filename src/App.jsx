import ContextsProvider from "./context";
import Home from "./pages/Home";
import "./App.css"

function App() {

  return (
    <ContextsProvider>
      <Home/>
    </ContextsProvider>
  );
}

export default App;
