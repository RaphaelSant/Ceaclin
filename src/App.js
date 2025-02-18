// App.js
import './App.css';
import Rotas from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();
  return (
    <Rotas />
  );
}

export default App;
