import { createSlice, nanoid } from "@reduxjs/toolkit";
import { ref, remove, set, update } from "firebase/database";
import { db } from "../../firebaseConfig";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      const newDocRef = ref(db, `todoList/${todo.id}`);
      set(newDocRef, todo).catch((error) => console.error('Error adding todo:', error));
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
      const dbRef = ref(db, `todoList/${todoId}`);
      remove(dbRef).catch((error) => console.error('Error removing todo:', error));
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex >= 0) {
        state.todos[todoIndex].text = text;
        update(ref(db, `todoList/${id}`), { text })
          .catch((error) => console.error('Error updating todo:', error));
      }
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
