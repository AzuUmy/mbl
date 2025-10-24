import { useQuery } from "@apollo/client/react";
import { ScheduleGamesDocument } from "../api/graphql/queries/scheduleGamesQuery";
import type {
  ScheduleGamesQuery,
  ScheduleGamesQueryVariables,
} from "../api/graphql/generated/graphql";

export function Games() {
  const { data, loading, error } = useQuery<
    ScheduleGamesQuery,
    ScheduleGamesQueryVariables
  >(ScheduleGamesDocument, {
    variables: {
      Day: "21",
      Month: "10",
      Year: "2025",
    },
  });

  return (
    <div className="mt-10">
      <div>
          <h1 className="text-xl font-bold">Match Day</h1>
      </div>
    </div>
  );
}
