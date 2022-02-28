import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

/**
 * hooks are use to help handle state = usestate and useeffect
 * we use state because its dymanic to handle data change
 *  
 */

function App() {
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''

  })
  //useEffect tell the app whats being rendered and getting the information
  useEffect(() => {
    //fetching api call with async 
    fetchData()

  }, [])

  const fetchData = async (city) => {

    try {
    const APIKEY = '7c1240b673c26f0155144163ad08b898'
    //install axios to allow API request 
    const result = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${'lagos'}&appid=${APIKEY}`)
    await setAllData({
      city: result.data.name,
      country: result.data.sys.country,
      temperature: result.data.main.temp
    })
  } catch (e) {
    console.log('Api is not loading')
  }
  }





  return (
    <div className="App">
     {console.log(
      '1. test for successful deployment' ,
      '2. test for fetching weather API (country, city , weather!)', 
      allData.country, allData.city, allData.temperature)}
    </div>
  );
}

export default App;
