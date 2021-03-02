import App from './App';
import { shallow } from 'enzyme';

describe("render component", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders App component header without crashing", () => {
    const wrapper = shallow(<App />);
    const header = (<h1>Simple Form</h1>);
    expect(wrapper.contains(header)).toEqual(true);
  });
})