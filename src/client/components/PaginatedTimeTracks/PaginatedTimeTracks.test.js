import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PaginatedTimeTracks from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PaginatedTimeTracks history={{}} match={{}} location={{}} userId="12" />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});