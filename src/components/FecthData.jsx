import { useEffect,useState } from "react";
import '../App.css'
const URL= `https://rickandmortyapi.com/api/character/`

function Data(props){
const[char,setChar]=useState([`${props.id}`])
function data(){
    fetch(`${URL}${props.id}`)
    .then(res=> res.json())
    .then(data=>setChar(data))
}
    useEffect(()=>{
        data()
    })
    return(
        <div >
            <p className="p-style">
            {char.name}  
            </p>    
            <p className="p-style">
           Status: {char.status}
            </p>    
        </div>   
    )
}
export default Data;