
import './App.css';
import Navbar from './componnents/Navbar';
import TextForm from './componnents/TextForm';

function App() {
  return (
  <>
  <Navbar title="wedding2" aboutText="About"/>
  <div className="container my-3">
  <TextForm heading="Enter the Text to analyze"/>
  </div>
    </>
  );
}

export default App;
