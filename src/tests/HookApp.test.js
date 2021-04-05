import { shallow } from "enzyme"
import HookApp from "../HookApp"

describe('Pruebas en <HookApp/>', () => {
  
  test('el componente <HookApp /> debe de mostrarse correctamente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });

});
