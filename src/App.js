import React from 'react';
import Counter from './components/Counter'
import Counter2 from './components/CounterRedux'

function App() {

  //const [isLogged, setIsLogged] = useState(false)
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Counter/>
      <hr/>
      <Counter2/>

    </div>
  );
}

export default App;
