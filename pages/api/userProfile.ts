// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// TODO: interfaceを分ける？？？同じファイルの方が管理しやすいかも？？
import { IGameItem } from '../../interfaces/IGameItem';
import { IUserProfile } from '../../interfaces/IUserProfile';

interface Data {
  userProfile: IUserProfile;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('test: api/userProfile');
  res.status(200).json({
    userProfile: {
      userName: 'Braver',
      gameList: [
        {
          gameTitle: 'Megaman 8',
          gameId: 'megaman8',
          status: 'played',
          console: 'playstation',
          imageUrl: '/images/playstation/games/megaman8.png'
        },
        {
          gameTitle: 'Megaman 2',
          gameId: 'megaman2',
          status: 'completed',
          console: 'Nintendo',
          imageUrl: '/images/playstation/games/megaman2.png'
        },
        {
          gameTitle: 'Cuphead',
          gameId: 'cuphead',
          status: 'Playing Now',
          console: 'Playstation 4',
          imageUrl: '/images/playstation/games/cuphead.png'
        },
        {
          gameTitle: 'Persona 4',
          gameId: 'persona4',
          status: 'backlog',
          console: 'Playstation 2',
          imageUrl: '/images/playstation-2/games/persona4.png'
        },
        {
          gameTitle: 'Resident Evil: RE Remake',
          gameId: 'resident-evil-remake',
          status: 'playing now',
          console: 'Playstation 4',
          imageUrl: '/images/playstation-4/games/resident-evil-re-remake.png'
        }
      ],
      currentlyPlaying: [
        {
          gameTitle: 'Cuphead',
          gameId: 'cuphead',
          status: 'Playing Now',
          console: 'Playstation 4',
          imageUrl: '/images/playstation/games/cuphead.png'
        },
        {
          gameTitle: 'Persona 4',
          gameId: 'persona4',
          status: 'backlog',
          console: 'Playstation 2',
          imageUrl: '/images/playstation-2/games/persona4.png'
        },
        {
          gameTitle: 'Resident Evil: RE Remake',
          gameId: 'resident-evil-remake',
          status: 'playing now',
          console: 'Playstation 4',
          imageUrl: '/images/playstation-4/games/resident-evil-re-remake.png'
        }
      ],
      completedGames: [],
      backloggedGames: [
        {
          gameTitle: 'Megaman 8',
          gameId: 'megaman8',
          status: 'played',
          console: 'playstation',
          imageUrl: '/images/playstation/games/megaman8.png'
        },
        {
          gameTitle: 'Megaman 2',
          gameId: 'megaman2',
          status: 'completed',
          console: 'Nintendo',
          imageUrl: '/images/playstation/games/megaman2.png'
        },
      ],
      previouslyPlayedGames: []
    }
  }
  )
}
