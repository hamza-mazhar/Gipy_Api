import Giphy from './components/Giphy';
import Error from './commons/Error';
function App() {
  return (
    <Error>
      <div className="App">
        <Giphy />
      </div>
    </Error>
  );
}
export default App;
