import { shallow } from "enzyme"
import RealExampleRef from "../../../components/04-useRef/RealExampleRef"

describe('Pruebas en RealExampleRef', () => {
  
  const wrapper = shallow(<RealExampleRef />)

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHook').exists()).toBe(false);
  })

  test('debe de mostrar el componente <MultipleCustomHook />', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHook').exists()).toBe(true);
  })
  
})
