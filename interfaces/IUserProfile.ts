import { IGameItem } from './IGameItem';


export interface IUserProfile {
  userName: string;
  gameList: IGameItem[];
  currentlyPlaying: IGameItem[];
  completedGames: IGameItem[];
  backloggedGames: IGameItem[];
  previouslyPlayedGames: IGameItem[];
}