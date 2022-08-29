// Actions
const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELELTE_TODO";

const initialState = {
  todos: [
    // {
    //   id: 0,
    //   writer: "",
    //   title: "",
    //   body: "",
    // },
  ],
};

// Action Creators
export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function deleteTodo(payload) {
  return { type: DELETE_TODO, payload };
}

// Reducer
export default function todos(state = initialState, action) {
  switch (action.type) {
    case "todo/ADD_TODO": {
      const new_todo_list = [...state.todos, action.payload];
      return { todos: new_todo_list };
    }

    case "todo/DELELTE_TODO": {
      const new_todo_list = [...state.todos].filter((todo) => {
        return todo.id !== action.payload;
      });
      return { todos: new_todo_list };
    }

    default:
      return state;
  }
}
