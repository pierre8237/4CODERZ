import React from 'react';
import ReactDOM from 'react-dom';
import YelpApp from './YelpApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YelpApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
