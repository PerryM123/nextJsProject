// testing-library
import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// components
import AddGame from './AddGame';

describe('renders addGame component', () => {
  const isActiveClassName: string = 'isActive';
  let renderResult: RenderResult;
  let currentlyPlayingButton: HTMLElement;
  let completedGamesButton: HTMLElement;
  let backloggedGamesButton: HTMLElement;
  let previouslyPlayedGamesButton: HTMLElement;

  beforeEach(async () => {
    const mockFunction = jest.fn();
    renderResult = render(<AddGame addGame={mockFunction}/>);
    currentlyPlayingButton = renderResult.getByText('currentlyPlaying');
    completedGamesButton = renderResult.getByText('completedGames');
    backloggedGamesButton = renderResult.getByText('backloggedGames');
    previouslyPlayedGamesButton = renderResult.getByText('previouslyPlayedGames');
  })
  it('render default screen', () => {
    // 存在確認
    expect(currentlyPlayingButton).toBeInTheDocument();
    expect(completedGamesButton).toBeInTheDocument();
    expect(backloggedGamesButton).toBeInTheDocument();
    expect(previouslyPlayedGamesButton).toBeInTheDocument();
    // 選択中状態かどうか確認
    expect(currentlyPlayingButton.className).toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);
  })
  it('renders clicked completedGames button is active', () => {
    userEvent.click(completedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);
  })

  it('renders clicked backloggedGames button is active', () => {
    userEvent.click(backloggedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);
  })

  it('renders clicked previouslyPlayedGames button is active', () => {
    userEvent.click(previouslyPlayedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).toEqual(isActiveClassName);
  })

  it('renders multiple button presses', () => {
    userEvent.click(completedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);

    userEvent.click(backloggedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);

    userEvent.click(previouslyPlayedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).toEqual(isActiveClassName);

    userEvent.click(currentlyPlayingButton);
    expect(currentlyPlayingButton.className).toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);
  })
});