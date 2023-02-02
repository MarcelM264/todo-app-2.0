import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { actions } from "./todos.actions";
import { TodoModel, todos } from "./todos.states"

export const todoReducer = createReducer(
  todos,
  on(actions.addTodoAction, (state, todo) => {
    return [todo, ...state]
  }),

  on(actions.updateTodoAction, (state, todo) => {
    let tempTodoIndex = state.findIndex((t) => t.id == todo.id);
    var tempStates = [...state];
    if(tempTodoIndex != -1) {
      tempStates[tempTodoIndex] = todo;
    }
    return [...tempStates];
  }),

  on(actions.deleteTodoAction, (state, todo) => {
    let todos = state.filter((t) => t.id != todo.id)
    return [...todos];
  }),
);

export const todoSelector = createSelector(createFeatureSelector("todos"),
  (todos: TodoModel[]) => todos
);
