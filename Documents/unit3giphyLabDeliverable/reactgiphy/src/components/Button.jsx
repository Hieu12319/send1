import { useState } from "react";

const Button = (props) => {
  const [buttonState, setButtonState] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault()
    props.getGiphy(buttonState)
    setButtonState(null)
  } 
  return(
    <div>
    <button onClick={handleSubmit}>
      <input type="submit" value="Press For GIF!" ></input>
      </button>
    </div>

  )
}
export default Button