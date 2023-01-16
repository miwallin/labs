import { useRef, useState } from 'react'

const ChangeTitleForm = ({ todo, changeTitle }) => {
    
    const [error, setError] = useState(false);
    const [text, setText] = useState(todo.title);
    const titleInput = useRef(null);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if(titleInput.current.value.trim() === '') {
            setError(true);
            titleInput.current.focus();
            return;
        }
        changeTitle(text);
        setError(false);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <input 
                type="text"
                className={`form-control ${error ? 'error' : ''}`}
                placeholder={error ? 'Enter a title' : ''}
                ref={titleInput}
                value={text}
                onChange={e => setText(e.target.value)}
                />
                <button>OK</button>
            </div>
        </form>
    )
}

export default ChangeTitleForm