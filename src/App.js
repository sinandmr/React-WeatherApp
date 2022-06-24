// Context
import { WeatherProvider } from './context/WeatherContext';
// Style
import './style.css';
// Components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <WeatherProvider>
        <Header />
        <Body />
        <Footer />
      </WeatherProvider>
    </div>
  );
}

export default App;
