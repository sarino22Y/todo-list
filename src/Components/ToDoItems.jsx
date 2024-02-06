import "./CSS/TodoItems.css";
import tick from "./assets/tick.png";
import noTick from "./assets/no-tick.png";
import cross from "./assets/x-btn.png";

const ToDoItems = ({ no, display, text, setTodos }) => {

    const deletebtn = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }
    
    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < data.length; i++) {
            console.log("data[i].no" ,data[i].no);
            console.log("no" , no);
            if (data[i].no === no) {
                if (data[i].display === "") {
                    console.log("mitovy sy vide" , no);
                    data[i].display = "line-through";
                } else {
                    data[i].display = "";
                }
                break;
            }
        }
        console.log("data0" ,data);
        setTodos(data);
    }

    return (
        <div>
            <div className="todoitems">
                <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
                    {display === "" ? (<img src={noTick} alt="" /> ) : (<img src={tick} alt="" />)}
                    <div className="todoitems-text">{text}</div>
                </div>
                <img onClick={()=> {deletebtn(no)}} className="todoitems-cross-icon" src={cross} alt="" />
            </div>
        </div>
    );
};

export default ToDoItems;
