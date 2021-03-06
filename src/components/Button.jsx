import {useEffect} from 'react';
import Data from './FecthData';
import Image from './FecthImage';
import Location from './FecthLocation';
import '../App.css';
import {useSelector} from 'react-redux'
import ChangeP from './Finder';


function Show(){
    const newId=useSelector((state)=>state.numberId.value)
    let number=Number(newId)
    
    function finder(){
        if(isNaN(number) || newId===''){
            return 1
        }else{
            return number
        }
    }
    useEffect(()=>{
     finder()
    })    




    return(<div className="father-all" ><div>
                <ChangeP/>
                
         </div>  
         <div className="card-box">      
          <div className="father-button">
             <Image id={finder()}/>
          </div>
          <div className="father-button">
          <Data n={finder()}/>
          </div>
           <p className="father-button" >Location:</p>
             <div className="father-button">
             <Location l={finder()}/>
             </div>
        </div> 
         </div>)
}
export default Show