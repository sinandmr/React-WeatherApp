import React from 'react';
import moment from 'moment';
function Day({ data, day }) {
  return (
    <div className="container">
      <p className="day">{day}</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt="asda"
      />
      <p className="degree">{(data.temp.day - 273).toFixed(1)}°</p>
    </div>
  );
}

export default Day;
