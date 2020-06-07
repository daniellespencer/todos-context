// todos
// all methods to interact
import React, {createContext} from "react"
const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
  ];
export const TodosContext = createContext();
