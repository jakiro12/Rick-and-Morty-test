import { useNavigate} from 'react-router-dom';
import style from './home.module.css'
// -1 hace que vuelva en el historial es ves de escribir "/....."
function Home(){
   const nav=useNavigate();
    
    return(
        <div className={style.back}>
            
            <button className={style.button} onClick={()=>nav('/1')}>
                Ingresar
            </button>
            
        </div>
    )
}
export default Home