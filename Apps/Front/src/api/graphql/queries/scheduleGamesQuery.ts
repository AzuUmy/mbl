import { gql } from '@apollo/client';

export const ScheduleGamesDocument = gql`
  query ScheduleGames($Day: String!, $Month: String!, $Year: String!) {
    scheduleGames(Day: $Day, Month: $Month, Year: $Year) {
      date
      league {
        name
        alias
        id
      }
      games {
        id
        status
        scheduled
        ps_round
        ps_game
        home {
          name
          market
          abbr
          win
          loss
        }
        away {
          name
          market
          abbr
          win
          loss
        }
        venue {
          name
          city
          state
        }
        broadcasts {
          network
          type
          locale
          channel
        }
      }
    }
  }
`;