import TableComponent from '../../components/table/TableComponent';
import { shallow } from 'enzyme';
import { listData } from '../data/dummy-data';

describe("Table Component test", () => {
  const tablePropsTest1 = {
    onDelete: jest.fn(),
    onOpenDetail: jest.fn(),
    listData: listData,
  }

  const tablePropsTest2 = {
    onDelete: jest.fn(),
    onOpenDetail: jest.fn(),
    listData: [],
  }
  it("renders th in Table Componenet", () => {
    const wrapper = shallow(<TableComponent {...tablePropsTest1} />);
    const countTh = wrapper.find('th');
    expect(countTh).toHaveLength(3);
    expect(countTh.at(0).text()).toEqual('Name');
    expect(countTh.at(1).text()).toEqual('Description');
    expect(countTh.at(2).text()).toEqual('Action');
  });
  
  it("renders td with dummy data in Table Componenet", () => {
    const wrapper = shallow(<TableComponent {...tablePropsTest1} />);
    const countTd = wrapper.find('td');
    expect(countTd).toHaveLength(9);
    expect(countTd.at(0).text()).toEqual('Minh Hoang');
    expect(countTd.at(1).text()).toEqual('Here is a descriptionnnnnnnnnnn');
    expect(countTd.at(3).text()).toEqual('Minh Hoang 1');
    expect(countTd.at(4).text()).toEqual('Here is a descriptionnnnnnnnnnn');
  });

  it("renders td with no data in Table Componenet", () => {
    const wrapper = shallow(<TableComponent {...tablePropsTest2} />);
    const countTd = wrapper.find('td');
    expect(countTd).toHaveLength(1);
    expect(countTd.at(0).text()).toEqual('Empty data');
  });

  it("delete data in Table Componenet", () => {
    const wrapper = shallow(<TableComponent {...tablePropsTest1} />);
    const deleteButtonFirstTime = wrapper.find('button').at(0);
    deleteButtonFirstTime.simulate("click");
    const countTdFirstTime = wrapper.find('td');
    expect(countTdFirstTime).toHaveLength(9);
  });
})
