
import Starships from "./components/Starships"
import './App.css';
import {useState, useEffect } from "react";


// function App() {
//   const [starships, setStarships] = useState(null);
//   const getStarships = async () => {
//     const response = await fetch(`http https://swapi.dev/api/starships`);
//     const data = await response.json();
//     setStarships(data);
//     console.log(data.results);
//   }
function App() {
  
  const [starships, setStarships] = useState(null)
  
  const getShip = async () =>{
    const response = await fetch("https://swapi.dev/api/starships/")

    const data = await response.json()
    setStarships(data)
  }

useEffect(() => {getShip()},[]);

return(
  <div className = "App">
    <img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/maxresdefault-13.jpg?auto=format&q=60&fit=max&w=930' alt='Star Wars Logo'/>
    <section className='cards'>
      {starships && starships.results.map(starshipsElement => (
        <Starships name={starshipsElement.name} />
      ))}
  </section>
  </div> 
  )
}

export default App;
