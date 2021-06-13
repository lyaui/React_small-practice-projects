import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to MidnightBlue'
  // 與此同時也測試了相應的文字是否存在
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click the button
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be "Change to MediumVioletRed"
  // 就和一般 JS 選取文字是一樣的
  expect(colorButton.textContent).toBe('Change to MediumVioletRed');
});

test('initial condition', () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disableds button on first click and enableds on second click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // 第一次點擊 checkbox button 要被 disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // 再次點擊 checkbox button 要被 enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has grey background and reverts to MediumVioletRed', () => {
  render(<App />);
  const coloMediumVioletRedButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // 第一次點擊 checkbox 後按鈕變成灰底
  fireEvent.click(checkbox);
  expect(coloMediumVioletRedButton).toHaveStyle({ backgroundColor: 'grey' });

  // 第一次點擊 checkbox 後按鈕變回紅底
  fireEvent.click(checkbox);
  expect(coloMediumVioletRedButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('Clicked disabled button has grey background and reverts to MidnightBlue', () => {
  render(<App />);
  const coloMediumVioletRedButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // 第一次點擊按鈕後變成藍色
  fireEvent.click(coloMediumVioletRedButton);
  expect(coloMediumVioletRedButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // 然後點擊 checkbox 後按鈕變成灰底
  fireEvent.click(checkbox);
  expect(coloMediumVioletRedButton).toHaveStyle({ backgroundColor: 'grey' });

  // 再次點擊 checkbox 後按鈕變回藍灰底
  fireEvent.click(checkbox);
  expect(coloMediumVioletRedButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

// 測試各種例子下執行函式的結果
describe('spaces before camel-cas capital letters', () => {
  // expect 裡面也可以放執行函式
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
