// testing-library
import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// components
import AddGame from './AddGame';

describe('renders addGame component', () => {
  const isActiveClassName: string = 'isActive';
  let renderResult: RenderResult;
  beforeEach(async () => {
    const mockFunction = jest.fn();
    renderResult = render(<AddGame addGame={mockFunction}/>);
  })
  it('render default screen', () => {
    const currentlyPlayingButton: HTMLElement = renderResult.getByText('currentlyPlaying');
    const completedGamesButton: HTMLElement = renderResult.getByText('completedGames');
    const backloggedGamesButton: HTMLElement = renderResult.getByText('backloggedGames');
    const previouslyPlayedGamesButton: HTMLElement = renderResult.getByText('previouslyPlayedGames');
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
    const currentlyPlayingButton: HTMLElement = renderResult.getByText('currentlyPlaying');
    const completedGamesButton: HTMLElement = renderResult.getByText('completedGames');
    const backloggedGamesButton: HTMLElement = renderResult.getByText('backloggedGames');
    const previouslyPlayedGamesButton: HTMLElement = renderResult.getByText('previouslyPlayedGames');

    userEvent.click(completedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);
  })

  it('renders clicked backloggedGames button is active', () => {
    const currentlyPlayingButton: HTMLElement = renderResult.getByText('currentlyPlaying');
    const completedGamesButton: HTMLElement = renderResult.getByText('completedGames');
    const backloggedGamesButton: HTMLElement = renderResult.getByText('backloggedGames');
    const previouslyPlayedGamesButton: HTMLElement = renderResult.getByText('previouslyPlayedGames');

    userEvent.click(backloggedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).not.toEqual(isActiveClassName);
  })

  it('renders clicked previouslyPlayedGames button is active', () => {
    const currentlyPlayingButton: HTMLElement = renderResult.getByText('currentlyPlaying');
    const completedGamesButton: HTMLElement = renderResult.getByText('completedGames');
    const backloggedGamesButton: HTMLElement = renderResult.getByText('backloggedGames');
    const previouslyPlayedGamesButton: HTMLElement = renderResult.getByText('previouslyPlayedGames');

    userEvent.click(previouslyPlayedGamesButton);
    expect(currentlyPlayingButton.className).not.toEqual(isActiveClassName);
    expect(completedGamesButton.className).not.toEqual(isActiveClassName);
    expect(backloggedGamesButton.className).not.toEqual(isActiveClassName);
    expect(previouslyPlayedGamesButton.className).toEqual(isActiveClassName);
  })

  it('renders multiple button presses', () => {
    const currentlyPlayingButton: HTMLElement = renderResult.getByText('currentlyPlaying');
    const completedGamesButton: HTMLElement = renderResult.getByText('completedGames');
    const backloggedGamesButton: HTMLElement = renderResult.getByText('backloggedGames');
    const previouslyPlayedGamesButton: HTMLElement = renderResult.getByText('previouslyPlayedGames');

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