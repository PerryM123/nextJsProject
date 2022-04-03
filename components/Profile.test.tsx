// testing-library
import { render, screen, fireEvent, RenderResult, prettyDOM } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { within } from '@testing-library/dom'
// components
import Profile from './Profile';
// interfaces
import { IUserProfile } from '../interfaces/IUserProfile';
import { debug } from 'console';

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
  it('add a game to each category one by one', async () => {
    // 以下のゲームを追加する
    const gameToAdd1: string = 'Persona 4';
    const gameToAdd2: string = 'Guilty Gear Strive';
    const gameToAdd3: string = 'Mr Mosquito';
    const gameToAdd4: string = 'Kirby';
    const gameToAdd5: string = 'Megaman 17';
    const addGameTextbox = renderResult.getByPlaceholderText('Add Game Here');
    const addGameButton = renderResult.getByText('Add Game');
    const currentlyPlayingButton = renderResult.getByText('currentlyPlaying');
    const completedGamesButton = renderResult.getByText('completedGames');
    const backloggedGamesButton = renderResult.getByText('backloggedGames');
    const previouslyPlayedButton = renderResult.getByText('previouslyPlayedGames');
    // TODO: comment
    const currentlyPlayingSection = document.querySelector<HTMLElement>('.currentlyPlayingSection');
    const completedGamesSection = document.querySelector<HTMLElement>('.completedGamesSection');
    const backloggedGamesSection = document.querySelector<HTMLElement>('.backloggedGamesSection');
    const previouslyPlayedGamesSection = document.querySelector<HTMLElement>('.previouslyPlayedGamesSection');
    let currentlyPlayingElements = within(currentlyPlayingSection!).queryAllByRole('listitem');
    let completedElements = within(completedGamesSection!).queryAllByRole('listitem');
    let backloggedElements = within(backloggedGamesSection!).queryAllByRole('listitem');
    let previouslyPlayedElements = within(previouslyPlayedGamesSection!).queryAllByRole('listitem');
    // 初期のゲーム一覧を確認
    expect(currentlyPlayingElements).toHaveLength(dummyProps.currentlyPlaying.length);
    expect(completedElements).toHaveLength(dummyProps.completedGames.length);
    expect(backloggedElements).toHaveLength(dummyProps.backloggedGames.length);
    expect(previouslyPlayedElements).toHaveLength(dummyProps.previouslyPlayedGames.length);
    userEvent.type(addGameTextbox, gameToAdd1);
    userEvent.click(addGameButton);
    // currentlyPlayingGames = within(currentlyPlayingSection!).getAllByRole('listitem');
    // Print test screen
    // screen.debug();
    // ユーザがゲームを追加したあとの確認
    // refresh old queries (TODO: there has to be a less annoying way to do this...)
    currentlyPlayingElements = within(currentlyPlayingSection!).queryAllByRole('listitem');
    completedElements = within(completedGamesSection!).queryAllByRole('listitem');
    backloggedElements = within(backloggedGamesSection!).queryAllByRole('listitem');
    previouslyPlayedElements = within(previouslyPlayedGamesSection!).queryAllByRole('listitem');
    expect(currentlyPlayingElements).toHaveLength(dummyProps.currentlyPlaying.length + 1);
    expect(completedElements).toHaveLength(dummyProps.completedGames.length);
    expect(backloggedElements).toHaveLength(dummyProps.backloggedGames.length);
    expect(previouslyPlayedElements).toHaveLength(dummyProps.previouslyPlayedGames.length);
    // add game #2...
    userEvent.click(completedGamesButton);
    userEvent.type(addGameTextbox, gameToAdd2);
    userEvent.click(addGameButton);
    currentlyPlayingElements = within(currentlyPlayingSection!).queryAllByRole('listitem');
    completedElements = within(completedGamesSection!).queryAllByRole('listitem');
    backloggedElements = within(backloggedGamesSection!).queryAllByRole('listitem');
    previouslyPlayedElements = within(previouslyPlayedGamesSection!).queryAllByRole('listitem');
    expect(currentlyPlayingElements).toHaveLength(dummyProps.currentlyPlaying.length + 1);
    expect(completedElements).toHaveLength(dummyProps.completedGames.length + 1);
    expect(backloggedElements).toHaveLength(dummyProps.backloggedGames.length);
    expect(previouslyPlayedElements).toHaveLength(dummyProps.previouslyPlayedGames.length);
    // add game #3...
    userEvent.click(backloggedGamesButton);
    userEvent.type(addGameTextbox, gameToAdd3);
    userEvent.click(addGameButton);
    currentlyPlayingElements = within(currentlyPlayingSection!).queryAllByRole('listitem');
    completedElements = within(completedGamesSection!).queryAllByRole('listitem');
    backloggedElements = within(backloggedGamesSection!).queryAllByRole('listitem');
    previouslyPlayedElements = within(previouslyPlayedGamesSection!).queryAllByRole('listitem');
    expect(currentlyPlayingElements).toHaveLength(dummyProps.currentlyPlaying.length + 1);
    expect(completedElements).toHaveLength(dummyProps.completedGames.length + 1);
    expect(backloggedElements).toHaveLength(dummyProps.backloggedGames.length + 1);
    expect(previouslyPlayedElements).toHaveLength(dummyProps.previouslyPlayedGames.length);
    // add game #4...
    userEvent.click(previouslyPlayedButton);
    userEvent.type(addGameTextbox, gameToAdd4);
    userEvent.click(addGameButton);
    currentlyPlayingElements = within(currentlyPlayingSection!).queryAllByRole('listitem');
    completedElements = within(completedGamesSection!).queryAllByRole('listitem');
    backloggedElements = within(backloggedGamesSection!).queryAllByRole('listitem');
    previouslyPlayedElements = within(previouslyPlayedGamesSection!).queryAllByRole('listitem');
    expect(currentlyPlayingElements).toHaveLength(dummyProps.currentlyPlaying.length + 1);
    expect(completedElements).toHaveLength(dummyProps.completedGames.length + 1);
    expect(backloggedElements).toHaveLength(dummyProps.backloggedGames.length + 1);
    expect(previouslyPlayedElements).toHaveLength(dummyProps.previouslyPlayedGames.length+1);
    // add game #5...
    userEvent.click(currentlyPlayingButton);
    userEvent.type(addGameTextbox, gameToAdd5);
    userEvent.click(addGameButton);
    currentlyPlayingElements = within(currentlyPlayingSection!).queryAllByRole('listitem');
    completedElements = within(completedGamesSection!).queryAllByRole('listitem');
    backloggedElements = within(backloggedGamesSection!).queryAllByRole('listitem');
    previouslyPlayedElements = within(previouslyPlayedGamesSection!).queryAllByRole('listitem');
    expect(currentlyPlayingElements).toHaveLength(dummyProps.currentlyPlaying.length + 2);
    expect(completedElements).toHaveLength(dummyProps.completedGames.length + 1);
    expect(backloggedElements).toHaveLength(dummyProps.backloggedGames.length + 1);
    expect(previouslyPlayedElements).toHaveLength(dummyProps.previouslyPlayedGames.length + 1);
    
  });
  it('shows an error when the user enters a game while the textbox is empty', async () => {
    const addGameButton = renderResult.getByText('Add Game');
    // 初期表示確認
    expect(screen.queryByText('Error! Please add a name!')).not.toBeInTheDocument();
    userEvent.click(addGameButton);
    // クリックすると文字が表示されるべき
    expect(screen.getByText('Error! Please add a name!')).toBeInTheDocument();
    // テキストが消えるパターンを確認
    const addGameTextbox = renderResult.getByPlaceholderText('Add Game Here');
    const gameToAdd1: string = 'Persona 4';
    userEvent.type(addGameTextbox, gameToAdd1);
    // テキストボックに入力するとエラ〜メッセージが非表示になるべき
    expect(screen.queryByText('Error! Please add a name!')).not.toBeInTheDocument();
  })
});