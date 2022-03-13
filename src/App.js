import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Tendring Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
