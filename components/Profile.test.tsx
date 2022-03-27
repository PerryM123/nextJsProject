// testing-library
import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// components
import Profile from './Profile';
// interfaces
import { IUserProfile } from '../interfaces/IUserProfile';

describe('renders Profile component', () => {
  let renderResult: RenderResult;
  const dummyProps: IUserProfile = {
    userName: 'Name',
    gameList: [
      {
        gameTitle: "game1",
        gameId: "gameId1",
        status: "currenlyPlaying",
        console: "playstation",
        imageUrl: "https://google.com/img.png",
      },
      {
        gameTitle: "game2",
        gameId: "gameId2",
        status: "currenlyPlaying",
        console: "playstation",
        imageUrl: "https://google.com/img.png",
      }
    ],
    currentlyPlaying: [
      {
        gameTitle: "game1",
        gameId: "gameId1",
        status: "currenlyPlaying",
        console: "playstation",
        imageUrl: "https://google.com/img.png",
      },
      {
        gameTitle: "game2",
        gameId: "gameId2",
        status: "currenlyPlaying",
        console: "playstation",
        imageUrl: "https://google.com/img.png",
      }
    ],
    completedGames: [],
    backloggedGames: [],
    previouslyPlayedGames: []
  }

  beforeEach(async () => {
    const mockFunction = jest.fn();
    renderResult = render(<Profile profileData={dummyProps} />);
  })
  it('render default screen', () => {
    // const currentlyPlayingButton: HTMLElement = renderResult.getByText('currentlyPlaying');
  });
});