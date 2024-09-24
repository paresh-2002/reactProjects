import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { db } from "./firebaseConfig";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { TodoActions } from "./features/todo/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const res = ref(db, `todoList/`);
        const snapshot = await get(res);
        if (snapshot.exists()) {
          const todosData = Object.values(snapshot.val());
          dispatch(TodoActions.setTodos(todosData));
          // console.log("TodoList:", todosData);
        }
      } catch (error) {
        setError("Error fetching todos: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, [dispatch]);

  return (
    <>
      <h1>Redux Toolkit Todo</h1>
      <AddTodo />
      {loading ? (
        <p>Loading todos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : todos <= 0 ? (
        <p>Todo is Empty</p>
      ) : (
        <div className="flex flex-col gap-y-3 justify-center items-center">
          {todos.map((todo) => (
            <div key={todo.id} className="w-1/2">
              <Todos todo={todo} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
