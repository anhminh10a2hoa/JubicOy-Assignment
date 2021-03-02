import PopupComponent from '../../components/popup/PopupComponent';
import { getADataFromLocalStorage } from '../../controllers/TableController';
import { shallow } from 'enzyme';
import { data } from '../data/dummy-data';

describe("Table Component test", () => {
  const popupProps = {
    onCloseDetail: jest.fn(),
    data: data,
    isShowing: false,
  }

  it("onCloseDetail function", () => {
    const wrapper = shallow(<PopupComponent {...popupProps} />);
    
    const closeButton = wrapper.find('button').at(0);
    closeButton.simulate("click");

    expect(wrapper.find('.popup').prop('style')).toHaveProperty('display', 'none');

    wrapper.setProps({isShowing: true});

    expect(wrapper.find('.popup').prop('style')).toHaveProperty('display', 'block');
  });
})
