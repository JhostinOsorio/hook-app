
import { act, renderHook } from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm';

describe('Prueba en useForm', () => {
  
  const initialForm = {
    name: 'Jhostin',
    email: 'jhostineosorio@gmail.com'
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(()=>useForm(initialForm));
    const [ values ] = result.current;
    expect(values).toEqual(initialForm);
  })

  test('debe de cambiar el valor del formulario', () => {
    const { result } = renderHook(()=>useForm(initialForm));
    const [ , handleInputChange ] = result.current;
    act(()=>{
      handleInputChange({
        target: {
          name: 'name',
          value: 'Estefano'
        }
      })
    })
    const [ values ] = result.current;
    expect(values).toEqual({...initialForm, name: 'Estefano'});
  })
  
  test('debe de reestablecer el formulario con reset', () => {
    const { result } = renderHook(()=>useForm(initialForm));
    const [ , handleInputChange, resetValues ] = result.current;
    act(()=>{
      handleInputChange({
        target: {
          name: 'name',
          value: 'Estefano'
        }
      })
      resetValues();
    })
    const [ values ] = result.current;
    expect(values).toEqual(initialForm);
  })
  
})
