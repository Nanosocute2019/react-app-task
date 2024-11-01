import "./Item.css";
import { AiOutlineEdit ,AiFillDelete} from "react-icons/ai";
export default function Item(props){
    const {data,deleteTask,editTask} = props
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
                <AiFillDelete className="btn" onClick={()=>deleteTask(data.id)}/>
                <AiOutlineEdit className="btn"onClick={()=>editTask(data.id)}/>   
            </div>
        </div>
    )
}