import {useState} from 'react';
import Data from './FecthData';
import Image from './FecthImage';
import Location from './FecthLocation'
import '../App.css'


function Show(pros){
const[data,setData]=useState(1)

function reset(){
    let value = data -data +1   
    setData(value)
}
    return(<><div className="father-button">
        <button onClick={()=>setData(data +1)} className="button-sty" >
        {pros.name}
    </button>       
        </div>
        <div className="father-button id-style">
        {data}
        </div>
         <div className="father-button">
        <button onClick={()=>reset()} className="button-sty">
        {`Reset`}
    </button>
         </div>  
         <div className="card-box">      
        <div className="father-button">
        <Image id={data}/>
        </div>
        <div className="father-button">
        <Data id={data}/>
        </div>
        <p className="father-button">Location:</p>
        <div className="father-button">
        <Location id={data}/>
        </div>
        </div> 
         </>)
}
export default Show