import Day from './Day';
import { useWeather } from '../context/WeatherContext';
function Body() {
  const { city, setCity, cityData } = useWeather();

  const handleSubmit = e => {
    e.preventDefault();
    const newCityName = e.target.cityName.value;
    setCity(city => {
      return { ...city, name: newCityName };
    });
    e.target.cityName.value = '';
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let currentDay = new Date().getDay();

  return (
    <div className="city">
      <form onSubmit={handleSubmit}>
        <label htmlFor="cityName">City Name </label>
        <input id="cityName" type="text" />
        <button>Fetch Data</button>
      </form>
      <div>
        <h2 style={{ marginTop: '50px' }}>{city.name}</h2>
      </div>
      <div className="results">
        {cityData.length &&
          cityData.map(
            (dayData, i) =>
              i !== 7 && (
                <Day
                  key={i}
                  day={days[(currentDay - 1 + i) % 7]}
                  data={dayData}
                />
              )
          )}
      </div>
    </div>
  );
}

export default Body;
