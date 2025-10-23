import { useQuery } from "@apollo/client/react"
import { ScheduleGamesDocument } from "../api/graphql/queries/scheduleGamesQuery"
import type { ScheduleGamesQuery, ScheduleGamesQueryVariables } from "../api/graphql/generated/graphql"

export function Games() {
const { data, loading, error } = useQuery<ScheduleGamesQuery, ScheduleGamesQueryVariables>(
    ScheduleGamesDocument,
    {
      variables: {
        Day: "21",  
        Month: "10",
        Year: "2025",
      },
    }
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div>
      <h1>MLB Games Schedule</h1>
      <pre>{JSON.stringify(data?.scheduleGames, null, 2)}</pre>
    </div>
  );
}
