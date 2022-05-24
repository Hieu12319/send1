

const Starships = ({name}) => {

    const cardStyle= {
        backgroundColor: "black",
        border: "solid yellow",
        borderColor: "yellow",
        borderRadius: "8px",
        color: "white",
        fontSize: "24pt",
        padding: "15px 50px",
        width: "300px"  
      }

      

return(
    <div style={cardStyle}>
        <h1>{name}</h1>
    </div>
)

}

export default Starships;