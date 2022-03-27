// testing-library
import { render, screen, fireEvent, RenderResult, prettyDOM } from '@testing-library/react'
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
    completedGames: [
      {
        gameTitle: "game3",
        gameId: "gameId3",
        status: "completedGames",
        console: "playstation",
        imageUrl: "https://google.com/img.png",
      },
      {
        gameTitle: "game4",
        gameId: "gameId4",
        status: "completedGames",
        console: "playstation",
        imageUrl: "https://google.com/img.png",
      }
    ],
    backloggedGames: [
      {
        gameTitle: "game5",
        gameId: "gameId5",
        status: "completedGames",
        console: "backloggedGames",
        imageUrl: "https://google.com/img.png",
      }
    ],
    previouslyPlayedGames: []
  }

  beforeEach(async () => {
    renderResult = render(<Profile profileData={dummyProps} />);
  })
  it('render default screen', () => {
    dummyProps.currentlyPlaying.forEach((game) => {
      expect(screen.getByText(game.gameTitle)).toBeInTheDocument();
    });
    dummyProps.completedGames.forEach((game) => {
      expect(screen.getByText(game.gameTitle)).toBeInTheDocument();
    });
    dummyProps.backloggedGames.forEach((game) => {
      expect(screen.getByText(game.gameTitle)).toBeInTheDocument();
    });
    // dummyProps.previouslyPlayedGamesは空なので「no data」が出るはず
    // TODO: Bad test since it's too close to the implementation because of the text 'no data' can change easily????
    expect(screen.getByText('no data')).toBeInTheDocument();
  });
  it('adds a game to a category when user presses button', () => {
    const gameToAdd: string = 'Persona 4';
    const addGameTextbox = renderResult.getByPlaceholderText('Add Game Here');
    const addGameButton = renderResult.getByText('Add Game');
    userEvent.type(addGameTextbox, gameToAdd);
    userEvent.click(addGameButton);
    expect(screen.getByText(gameToAdd)).toBeInTheDocument();
    // TODO: Check if the other lists are still the same length before adding this game...
    // HINT: https://stackoverflow.com/questions/57435680/whats-the-idiomatic-way-of-testing-a-list-with-dynamic-content-using-react-test
  });
  it('shows an error when the user enters a game while the textbox is empty', async () => {
    // TODO
    // screen.debug();
    const items = await screen.findAllByRole('button');
    console.log('items: ', items);
    expect(items).toHaveLength(3);

  })
});