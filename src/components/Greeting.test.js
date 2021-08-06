import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// Grouping tests together
describe('<Greeting/>', () => {
  test('renders "Hello World" as a text', () => {
    // three 'A' s -> Arrange, Act, Assert

    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    //Assert
    const helloWorldElement = screen.getByText('Hello World!', { exact: true }); // 默认是true 完全一样
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);
    const pElement = screen.getByText('good to see you', { exact: false });
    expect(pElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert
    const pElement = screen.getByText('Changed!', { exact: true });
    expect(pElement).toBeInTheDocument();
  });

  // 这个在测试写没写条件渲染 {!changedText && <p></p>}
  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const pElement = screen.queryByText('good to see you', { exact: false });
    expect(pElement).toBeNull();
  });
});
