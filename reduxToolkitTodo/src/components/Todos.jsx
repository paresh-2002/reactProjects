import { useDispatch } from "react-redux";
import { useState } from "react";
import {TodoActions} from '../features/todo/todoSlice'

function Todos({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const dispatch = useDispatch();

  const saveTodo = () => {
    if (todoMsg.trim()) {
      dispatch(TodoActions.updateTodo({ id: todo.id, text: todoMsg }));
      setIsTodoEditable(false);
    }
  };

  return (
    <div className={`flex border mt-5 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 justify-between items-center text-black bg-[#ccbed7]`}>
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <div className="flex">
        {isTodoEditable ? (
          <>
            <button
              className="inline-flex w-8 h-8 rounded-lg mr-2 text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
              onClick={saveTodo}
            >
              💾
            </button>
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
              onClick={() => setIsTodoEditable(false)} 
            >
              ❌
            </button>
          </>
        ) : (
          <>
            <button
              className="inline-flex w-8 h-8 rounded-lg mr-2 text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
              onClick={() => setIsTodoEditable(true)}
            >
              ✏️
            </button>
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
              onClick={() => dispatch(TodoActions.removeTodo(todo.id))}
            >
              ❌
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Todos;
