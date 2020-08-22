import React from 'react';
import { render } from '@testing-library/react'
import App from './App';
import Dashboard from './Components/Dashboard';
import Display from './Components/Display';




// https://thomlom.dev/test-react-testing-library/
// https://github.com/kentcdodds/create-react-app-react-testing-library-example#writing-tests

// Test the sum "unit" function
// test('', () => {
//   expect(Dashboard.handleStrike())
// // })
// const testFunc = (value) => {
//   return App.strikes;
// }

// test('importing and changing vars from App', () => {
//   expect(testFunc(6)).toBe(6);
// });

test('renders without crashing', () => {
  render(<Display />);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});




// test('it displays a link with the text Learn React', () => {
//   const { getByText } = render(<App />);
//   // console.log(container.getByText('Learn React'));
//   // assert that the "learn react" node is on the DOM
//   getByText(/learn react/i);
// });

// // Test the sum "unit" function
// test('it returns the sum of two numbers', () => {
//   expect(sum(2, 2)).toBe(4);
//   expect(sum(3, 5)).toBe(8);
// })