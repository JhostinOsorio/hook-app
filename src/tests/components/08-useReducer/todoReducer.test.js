import todoReducer from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
  
  test('debe de retorar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  })

  test('debe de agregar un TODO', () => {
    const newTodo = {
      id: 123,
      desc: 'Aprender Node.js',
      done: false,
    }
    const state = todoReducer(demoTodos, {
      type: 'add',
      payload: newTodo,
    })
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  })

  test('debe de borrar un TODO', () => {
    const [ todoOne ] = demoTodos;
    const state = todoReducer(demoTodos, {
      type: 'delete',
      payload: 2,
    })
    expect(state.length).toBe(1);
    expect(state).toEqual([todoOne])
  })

  test('debe hacer el TOGGLE del TODO', () => {
    const payload = 1;
    const state = todoReducer(demoTodos, {
      type: 'changeDone',
      payload,
    })
    const newDemoTodo = demoTodos.map(demo => (
      (demo.id === payload) ?
      {...demo, done: !demo.done}
      : demo
    ))
    expect(state).toEqual(newDemoTodo)
  })
  
})
