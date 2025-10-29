import { useQuery } from "@apollo/client/react";
import { ScheduleGamesDocument } from "../api/graphql/queries/scheduleGamesQuery";
import type {
  ScheduleGamesQuery,
  ScheduleGamesQueryVariables,
} from "../api/graphql/generated/graphql";
import * as MLBLogos from "react-mlb-logos";
import { Series } from "../utils/Dictionary";

export function Games() {
  const { data, loading, error } = useQuery<
    ScheduleGamesQuery,
    ScheduleGamesQueryVariables
  >(ScheduleGamesDocument, {
    variables: {
      Year: "2025",
      startDate: "2025-10-01",
      endDate: "2025-10-29",
    },
  });

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  const gamesTodayWithSeries = data?.scheduleGames.flatMap((serie) =>
    serie.games
      .filter((game) => {
        const gameDate = new Date(game.scheduled).toISOString().split("T")[0];

        return gameDate === todayString;
      })
      .map((game) => ({ ...game, seriesName: serie.series }))
  );

  const getLogo = (abbr: string | undefined | null) => {
    if (!abbr) return null;
    const LogoComponent = (MLBLogos as any)[abbr.toUpperCase()];
    return typeof LogoComponent === "function" ? (
      <LogoComponent className="w-8 h-8" />
    ) : null;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-10 relative w-full text-white ">
      <div className="fixed left-0 top-0 bg-slate-900 w-full p-1 h-96  rounded-b-3xl">
        <h1 className="text-xl font-bold mt-24 mb-4">Match Day</h1>
        <div className="mt-14">
          {gamesTodayWithSeries?.length ? (
            gamesTodayWithSeries.map((game) => (
              <div
                key={game.id}
                className="flex justify-center items-center gap-3 "
              >
                <div className="flex flex-row">
                  <div className="p-1 bg-white rounded-full z-10">
                    {getLogo(game.home.abbr)}
                  </div>
                  <div className="p-1 bg-white rounded-full -ml-8 z-20 shadow-2xl">
                    {getLogo(game.away.abbr)}
                  </div>
                </div>
                <div>{Series[game.seriesName as keyof typeof Series]}</div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
