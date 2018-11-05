import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "75dc83ae2f9fe5edc1e29769a660f641";

class App extends React.Component{
  getWeather = async () => {
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render(){
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;