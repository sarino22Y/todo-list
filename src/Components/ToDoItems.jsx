import './CSS/TodoItems.css'
import tick from './assets/tick.png'
import noTick from './assets/no-tick.png'
import cross from './assets/x-btn.png'

const ToDoItems = ({no, text, display}) => {
  return (
    <div>
        <div className="todoitems">
            <div className="todoitems-container">
                <img src={tick} alt="" />
                <img src={noTick} alt="" />
                <div className="todoitems-text">{text}</div>
            </div>
            <img className='todoitems-cross-icon' src={cross} alt="" />
        </div>
    </div>
  )
}

export default ToDoItems
