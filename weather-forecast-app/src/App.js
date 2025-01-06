import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

import './App.css';

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(()=>{
    // Get your Current Location
      weather.fetchUserLocationData();
  },[]);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button  value="Refresh" />
    </div>
  );
}

export default App;
