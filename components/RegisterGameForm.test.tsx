// testing-library
import { render, screen, fireEvent, RenderResult, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// components
import RegisterGameForm from './RegisterGameForm';
global.URL.createObjectURL = jest.fn();

describe('renders RegisterGameForm component', () => {
  beforeEach(async () => {
    render(<RegisterGameForm />);
  })
  it('render default screen', async () => {
    // gameName選択
    const gameNameInput = screen.getByTestId('gameName');
    expect(gameNameInput).toHaveAttribute('value', '');
    // ConsoleName選択
    expect((screen.getByText('PS1') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS2') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS3') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS4') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Super Nintendo') as HTMLOptionElement).selected).toBeFalsy();
    // Status選択
    expect((screen.getByText('Currently Playing') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Completed Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Backlogged Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Previously Played Games') as HTMLOptionElement).selected).toBeFalsy();
    // Game image選択
    const previewImage = screen.queryByTestId('previewImage');
    expect(previewImage).toBeNull();
  });
  it('enter game name', () => {
    const gameNameInput = screen.getByTestId('gameName');
    userEvent.type(gameNameInput, 'Game name here');
    expect(gameNameInput).toBeInTheDocument();
  });
  it('select console', () => {
    // PS1を選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectConsole'),
      screen.getByRole('option', {name: 'PS1'}),
    )
    expect((screen.getByText('PS1') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('PS2') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS3') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS4') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Super Nintendo') as HTMLOptionElement).selected).toBeFalsy();
    // PS2を選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectConsole'),
      screen.getByRole('option', {name: 'PS2'}),
    )
    expect((screen.getByText('PS1') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS2') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('PS3') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS4') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Super Nintendo') as HTMLOptionElement).selected).toBeFalsy();
    // PS3を選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectConsole'),
      screen.getByRole('option', {name: 'PS3'}),
    )
    expect((screen.getByText('PS1') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS2') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS3') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('PS4') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Super Nintendo') as HTMLOptionElement).selected).toBeFalsy();
    // PS4を選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectConsole'),
      screen.getByRole('option', {name: 'PS4'}),
    )
    expect((screen.getByText('PS1') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS2') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS3') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS4') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('Super Nintendo') as HTMLOptionElement).selected).toBeFalsy();
    // Super Nintendoを選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectConsole'),
      screen.getByRole('option', {name: 'Super Nintendo'}),
    )
    expect((screen.getByText('PS1') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS2') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS3') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('PS4') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Super Nintendo') as HTMLOptionElement).selected).toBeTruthy();
  });
  it('select status', () => {
    // Currently Playingを選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectStatus'),
      screen.getByRole('option', {name: 'Currently Playing'}),
    )
    expect((screen.getByText('Currently Playing') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('Completed Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Backlogged Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Previously Played Games') as HTMLOptionElement).selected).toBeFalsy();
    // Completed Gamesを選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectStatus'),
      screen.getByRole('option', {name: 'Completed Games'}),
    )
    expect((screen.getByText('Currently Playing') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Completed Games') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('Backlogged Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Previously Played Games') as HTMLOptionElement).selected).toBeFalsy();
    // Currently Playingを選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectStatus'),
      screen.getByRole('option', {name: 'Backlogged Games'}),
    )
    expect((screen.getByText('Currently Playing') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Completed Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Backlogged Games') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('Previously Played Games') as HTMLOptionElement).selected).toBeFalsy();
    // Currently Playingを選択した場合
    userEvent.selectOptions(
      screen.getByTestId('selectStatus'),
      screen.getByRole('option', {name: 'Previously Played Games'}),
    )
    expect((screen.getByText('Currently Playing') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Completed Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Backlogged Games') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Previously Played Games') as HTMLOptionElement).selected).toBeTruthy();
  });
  it('select game image', async () => {
    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const inputFile = screen.getByTestId(/selectGameImage/i);
    // preview image does not exist
    expect(screen.queryByTestId('previewImage')).toBeNull();
    userEvent.upload(inputFile, fakeFile);
    // after image upload, preview image is on screen
    expect(screen.getByTestId('previewImage')).toBeTruthy();
  });
  it('check registraton error with input', () => {
    // TODO
  });
  it('after successfully post registering game, show default inputs and success message', () => {
    // TODO
  });
  it('after failing to register  game, show error message and inputs', () => {
    // TODO
  });
});