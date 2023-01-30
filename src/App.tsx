import { add } from "../plugin/rust/pkg";
import './App.css'

function App() {
  return (
    <div className="App">
      <span>
        1010 + 3030 = {add(1010, 3030)}
      </span>
    </div>
  )
}

export default App
