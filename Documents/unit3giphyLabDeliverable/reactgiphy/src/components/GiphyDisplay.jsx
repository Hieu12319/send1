
const GiphyDisplay = ({giphy}) => {
    if(giphy) {
      
         return (
             <div>
                 
         <img src={giphy.data.images.original.url} alt=""/>
       
      </div>
         )
    }
}



export default GiphyDisplay;