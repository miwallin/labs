import { useRef } from 'react'

const AddTodoForm = ({ addTodo }) => {
    
    const todoTitleInput = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoTitleInput.current.value !== '') {
            addTodo(todoTitleInput.current.value);
            todoTitleInput.current.value = '';
        }
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='input-group'>
                <input 
                type="text" 
                className='form-control' 
                placeholder='Todo title here...'
                ref={todoTitleInput}
                />
                <button>Add Todo</button>
            </div>
        </form>
    )
}

export default AddTodoForm