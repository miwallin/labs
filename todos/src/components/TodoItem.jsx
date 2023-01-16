import { useState } from 'react'
import ChangeTitleForm from './ChangeTitleForm'

const TodoItem = ({ todo, changeTodo, removeTodo, toggleComplete }) => {

    const [change, setChange] = useState(false)

    const changeTitle = text => {
        changeTodo(todo, text);
        setChange(false);
    }

    return (
        <div className='TodoItem'>
          { change
            ? <ChangeTitleForm changeTitle={changeTitle} todo={todo} />
            : <div className={`todo-title ${todo.complete ? 'complete' : ''}`}>{ todo.title }</div>
          }
          <div className='buttons'>
            <button onClick={() => setChange(change => !change)} className="change-button"><img src="../src/assets/edit640.png" /></button>
            <button onClick={() => toggleComplete(todo)} className="complete-button"><img src="../src/assets/check640.png" /></button>
            <button onClick={() => removeTodo(todo.id)} className='delete-button'><img src="../src/assets/abort640.png" /></button>
          </div>
        </div>
      )
    }

export default TodoItem