import FormComponent from '../../components/form/FormComponent';
import { shallow } from 'enzyme';
import { data } from '../data/dummy-data';

const simulateChangeOnInput = (wrapper: any, inputSelector: string, newValue: string) => {
  const input = wrapper.find(inputSelector);
  input.simulate('change', {
    target: {value: newValue}
  })
  return wrapper.find(inputSelector);
}

describe("Form Component test", () => {
  const formProps = {
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    handleClear: jest.fn(),
    userInfo: data,
  }
  it("renders label in Form Componenet", () => {
    const wrapper = shallow(<FormComponent {...formProps} />);
    const nameLabel = wrapper.find('.name-label').text();
    expect(nameLabel).toEqual('Name');

    const descriptionLabel = wrapper.find('.description-label').text();
    expect(descriptionLabel).toEqual('Description');

    const commentLabel = wrapper.find('.comment-label').text();
    expect(commentLabel).toEqual('Comment');
  });
  
  it("render button in Form Component", () => {
    const wrapper = shallow(<FormComponent {...formProps} />);
    const clearButton = wrapper.find('button').at(0).text();
    expect(clearButton).toEqual('Clear');

    const addButton = wrapper.find('button').at(1).text();
    expect(addButton).toEqual('Add');
  })

  it("renders 3 buttons in Form Componenet", () => {
    const wrapper = shallow(<FormComponent {...formProps} />);
    const countInput = wrapper.find('input');
    expect(countInput).toHaveLength(3);
  });

  it("onChange function", () => {
    const wrapper = shallow(<FormComponent {...formProps} />);

    const nameInput = simulateChangeOnInput(wrapper, '.name-input', 'Minh Hoang')
    const descriptionInput = simulateChangeOnInput(wrapper, '.description-input', 'Here is a descriptionnnnnnnnnnn')
    const commentInput = simulateChangeOnInput(wrapper, '.comment-input', 'Here is a commentttttttttttt')

    expect(nameInput.prop("value")).toBe("Minh Hoang");
    expect(descriptionInput.prop("value")).toBe("Here is a descriptionnnnnnnnnnn");
    expect(commentInput.prop("value")).toBe("Here is a commentttttttttttt");
  });

  it("submit function", () => {
    const wrapper = shallow(<FormComponent {...formProps} />);

    const nameInput = simulateChangeOnInput(wrapper, '.name-input', 'Minh Hoang')
    const descriptionInput = simulateChangeOnInput(wrapper, '.description-input', 'Here is a descriptionnnnnnnnnnn')
    const commentInput = simulateChangeOnInput(wrapper, '.comment-input', 'Here is a commentttttttttttt')

    const addButton = wrapper.find('button').at(1);
    addButton.simulate("click");

    expect(nameInput.prop("value")).toBe("Minh Hoang");
    expect(descriptionInput.prop("value")).toBe("Here is a descriptionnnnnnnnnnn");
    expect(commentInput.prop("value")).toBe("Here is a commentttttttttttt");
  })

  it("clear function test", () => {
    const wrapper = shallow(<FormComponent {...formProps} />);

    const nameInput = simulateChangeOnInput(wrapper, '.name-input', 'Minh Hoang')
    const descriptionInput = simulateChangeOnInput(wrapper, '.description-input', 'Here is a descriptionnnnnnnnnnn')
    const commentInput = simulateChangeOnInput(wrapper, '.comment-input', 'Here is a commentttttttttttt')

    const clearButton = wrapper.find('button').at(0);
    clearButton.simulate("click");
    wrapper.update();
    
    expect(nameInput.prop("value")).toBe("Minh Hoang");
    expect(descriptionInput.prop("value")).toBe("Here is a descriptionnnnnnnnnnn");
    expect(commentInput.prop("value")).toBe("Here is a commentttttttttttt");
  })
})
