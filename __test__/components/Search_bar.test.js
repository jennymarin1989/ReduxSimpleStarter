
import React from 'react';
import { shallow} from 'enzyme';
import SearchBar from '../../src/components/Search_bar';

describe('SearchBar' , () => {
  it('renders something', () => {
    let searchBar = shallow(< SearchBar />)
    expect(searchBar).to.exist;
  });
});
