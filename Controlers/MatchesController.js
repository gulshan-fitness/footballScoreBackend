const { default: axios } = require("axios");

class MatchesController {


read(id, query) {
  console.log("ID:", id);
  console.log("Query:", query);

  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        // Handle fetch by fixture ID (you can implement this part as needed)
        console.log("Fetch by ID not implemented yet:", id);
        reject({ msg: "fetch by id not implemented", status: 0 });
        return;
      }

      const key = query?.live ? "live" : "date";
      const value = query?.live ?? query?.date;

      if (!value) {
        reject({ msg: "Missing live or date query", status: 0 });
        return;
      }

      const url = `https://v3.football.api-sports.io/fixtures?${key}=${value}`;

      axios
        .get(url, {
          headers: {
            "x-apisports-key": process.env.FOOTBALL_API_KEY,
          },
        })
        .then((success) => {
          const data = success.data;

          if (data.errors && Object.keys(data.errors).length > 0) {
            console.error("API errors:", data.errors);
            reject({ msg: "Matches not found", status: 0 });
            return;
          }

          const wellStructuredData = [];

          data.response?.forEach((match) => {
            const existingLeague = wellStructuredData.find(
              (d) => d?.league?.id === match?.league?.id
            );

            const fixtureData = {
              fixture: match?.fixture,
              teams: match?.teams,
              goals: match?.goals,
              score: match?.score ?? null,
              halftime: match?.score?.halftime ?? null,
              fulltime: match?.score?.fulltime ?? null,
              extratime: match?.score?.extratime ?? null,
              penalty: match?.score?.penalty ?? null,
            };

            if (existingLeague) {
              existingLeague.fixtures.push(fixtureData);
            } else {
              wellStructuredData.push({
                league: match?.league,
                fixtures: [fixtureData],
              });
            }
          });

          resolve({
            msg: "Matches found",
            status: 1,
            matches: wellStructuredData,
          });
        })
        .catch((error) => {
          console.error("API call failed:", error);
          reject({ msg: "Failed to fetch fixtures", status: 0 });
        });
    } catch (error) {
      console.error("Internal error:", error);
      reject({ msg: "Internal error", status: 0 });
    }
  });
}

}

module.exports = MatchesController;
