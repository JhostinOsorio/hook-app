import { shallow } from 'enzyme';
import MultipleCustomHook from '../../../components/03-examples/MultipleCustomHook';
import useFetch from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
  
  test('debe de mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })

    const wrapper = shallow(<MultipleCustomHook />)
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Jhostin',
          quote: 'Hola mundo',
        }
      ],
      loading: false,
      error: null,
    })

    const wrapper = shallow(<MultipleCustomHook />)
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('blockquote.blockquote > p').text()).toBe('Hola mundo');
    expect(wrapper.find('footer.blockquote-footer').text()).toBe('Jhostin');

    // console.log(wrapper.html())
  })

})
