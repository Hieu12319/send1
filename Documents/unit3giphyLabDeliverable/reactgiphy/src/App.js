import Button from"./components/Button";
import GiphyDisplay from"./components/GiphyDisplay";
import {useState, useEffect} from "react"

function App() {
 //set api key
   const API_KEY ="JNKg0eDRA7z7M3Bgura98nYU4YDLAYdB";

   const [giphy, setGiphy] = useState(null)

   const getGiphy = async () => {
     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
    const data = await response.json()
    setGiphy(data)
    console.log(data)
    }

 
  return (
    <div className="App">
     <Button getGiphy={getGiphy}/>
     <GiphyDisplay giphy={giphy}/>
    </div>
  );
}

export default App;
