import { useEffect,useState } from "react";
import '../App.css'
const URL= `https://rickandmortyapi.com/api/character/`

function Location(props){
const[char,setChar]=useState([`${props.id}`])
function data(){
    fetch(`${URL}${props.id}`)
    .then(res=> res.json())
    .then(data=>setChar(data.location.name))
}
    useEffect(()=>{
        data()
    })
    return(
        <div >
            <p className="p-style">
            {char}  
            </p>   
       </div>   
    )
}
export default Location;