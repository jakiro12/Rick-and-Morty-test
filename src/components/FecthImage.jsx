import { useEffect,useState } from "react";
import '../App.css'
const URL= `https://rickandmortyapi.com/api/character/`

function Image(props){
const[char,setChar]=useState([`${props.id}`])
function data(){
    fetch(`${URL}${props.id}`)
    .then(res=> res.json())
    .then(data=>setChar(data.image))
}
    useEffect(()=>{
        data()
    })
    return(
        <div className="father-button">
           <img src={char} alt="" className="image"/>
         </div>
    )
}
export default Image;