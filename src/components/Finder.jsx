import {useState} from 'react';
import { changeId} from '../features/theme';
import {useDispatch} from 'react-redux';
import '../App.css';
//onKeyPress ya no esta disponible para muchos navegadores en sulugar se usa onKeyDown que es lo mismo


function ChangeP(){
    const[number,setNumber]=useState('')
    const dispatch=useDispatch()  
    
    const handleKeyDown = event => {
        console.log('User pressed: ', event.key);
    
        // console.log(message);
    
        if (event.key === 'Enter') {
          // 👇️ your logic here
          console.log(number);
        }
      };
  
  
    
    return(
        <div className='finder-button'  >
           
            <button  className='button-sty' onClick={()=>{dispatch(changeId(number))}}>Change to:</button>
            <input  onKeyDown={handleKeyDown} className='find' type="text" onChange={(event)=>{setNumber(event.target.value)}} />
            
        </div>
    )
}
export default ChangeP