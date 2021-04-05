import { renderHook } from '@testing-library/react-hooks'
import useFetch from '../../hooks/useFetch'

describe('Pruebas en useFetch', () => {
  
  test('debe de retornar la informacion por defecto', () => {
    const { result } = renderHook(()=>useFetch('https://jsonplaceholder.typicode.com/posts'))
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  })
  
  test('debe de tener la info deseada', async () => {
    const { result, waitForNextUpdate } = renderHook(()=>useFetch('https://jsonplaceholder.typicode.com/posts'))
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data.length).toBe(100);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  })
  
  test('debe de retornar un mensaje de error', async () => {
    const { result, waitForNextUpdate } = renderHook(()=>useFetch('https://reqres.in/apid/users?page=2'))
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  })

})
