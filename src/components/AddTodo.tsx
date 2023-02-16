import { useState } from 'react'
import { useAppDispatch } from '../hook';
import { addTodo } from '../store/todoSlice';
import NewTodoForm from '../components/NewTodoForm'
import TodoList from '../components/TodoList'



const AddTodo: React.FC = () => {

  const [text, setText] = useState('')
  const dispatch = useAppDispatch()
  
  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo(text))
      setText('')
    }
  }

    return (
      <div>
      <NewTodoForm
      value={text}
      updateText={setText}
      handleAction={handleAction}
      />
      <TodoList/>
      </div>
    );
}
  
export {AddTodo}