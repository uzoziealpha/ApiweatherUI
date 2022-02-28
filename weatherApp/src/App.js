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
  const [search, setSearch] = useState('');
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
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`)
    await setAllData({
      city: result.data.name,
      country: result.data.sys.country,
      temperature: result.data.main.temp
    })
  } catch (e) {
    console.log('Api is not loading')
  }
  }


  const handleSubmit =  (event) => {
    console.log(search)
    event.preventDefault()
    fetchData(search)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  



  return (
    //under main is where we will doa  form and a  search results  
    <main>
    <div className="App">
     {console.log(
      '1. test for successful deployment' ,
      '2. test for fetching weather API (country, city , weather!)', 
      allData.country, allData.city, allData.temperature)}
  <form onSubmit={handleSubmit}>
    <input
    value={search}
     type='text'
     name='city'
     placeholder='City Name'
     onChange={handleChange}
    />
    <button for='city'>Search</button>
  </form>


      <section>
       <h1>{allData.city}</h1>
       <h2>{allData.country}</h2>
       <h3>TEMPERATURE</h3>
       <p>{allData.temperature}F</p>
      </section>
    </div>
    </main>
  
  );
}

export default App;
