import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from '../../hooks/useCounter'

describe('Pruebas un useCounter', () => {
  
  test('debe de retornar valores por defecto', () => {
    const { result } = renderHook(()=>useCounter())
    expect( result.current.state ).toBe(10);
  })
  
  test('debe de retornar el counter en 100', () => {
    const { result } = renderHook(()=>useCounter(100))
    expect( result.current.state ).toBe(100);
  })

  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(()=>useCounter(100));
    const { increment } = result.current;
    act(()=>increment(1));
    expect( result.current.state ).toBe(101);
  })

  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(()=>useCounter(100));
    const { decrement } = result.current;
    act(()=>decrement(1));
    expect( result.current.state ).toBe(99);
  })
  
  test('debe de resetear el counter a su estado inicial', () => {
    const initialState = 20;
    const { result } = renderHook(()=>useCounter(initialState));
    const { increment, reset } = result.current
    act(()=>{
      increment(2);
      reset();
    });
    const { state } = result.current;
    expect( state ).toBe(initialState);
  })
  

})
