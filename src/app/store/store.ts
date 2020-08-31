import { SpaceXRoot } from '../spaceX';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, DISPLAY_ACTIVE_PRGM} from './actions/actions';

export interface ITodo {
    id: number;
    description: string;
    responsible: string;
    priority: string;
    isCompleted: boolean;
}

export interface IAppState {
    todos: ITodo[];
    spaceXObj: SpaceXRoot[];//my main object
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    spaceXObj: [],
    lastUpdate: null
}

// export function rootReducer(state, action) {
//     return state;
// }

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;    
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })
        
        case TOGGLE_TODO:
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index+1)
                ],
                lastUpdate: new Date()
            })
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            })
    }
    return state;
}