
import Starships from "./components/Starships"
import './App.css';
import {useState, useEffect } from "react";


function App() {
  const [starships, setStarships] = useState(null);
  const getStarships = async () => {
    const response = await fetch(`http https://swapi.dev/api/starships`);
    const data = await response.json();
    setStarships(data);
    console.log(data.results);
  }


useEffect(() => {getStarships()},[]);

return(
  <div className = "App">
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/300px-Star_Wars_Logo.svg.png' alt='Star Wars Logo'/>
  
    <section className="cards">
      {starships && starships?.results?.map(starships => (
        <Starships name={starships.name} />
      ))}
  </section>
  </div> 
  )
}

export default App;
