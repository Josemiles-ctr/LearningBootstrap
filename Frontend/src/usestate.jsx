import { useState} from "react";
import styles from './index.module.css'
function State({title}){
    const[hasLiked, setHasLiked] = useState(false);
    const alterColor=()=> {
   const title =document.querySelectorAll('title');
   title.forEach(el=>{el.target.style.color=hasLiked?"green":"tomato";})
    }
    return(
        <><h3 id="title">{title}</h3>
        <button onClick={()=>{setHasLiked(!hasLiked),alterColor()}} className={styles.likeBtn}>
            {hasLiked ? '🧡' : '🤍'}
        </button>
        </>
    )

}
export default State