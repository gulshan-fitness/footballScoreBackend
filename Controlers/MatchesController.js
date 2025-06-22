const { default: axios } = require("axios");

class MatchesController {

  read(query) {
    return new Promise(async (resolve, reject) => {
      try {
       

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://v3.football.api-sports.io/fixtures?${params}`;
        console.log(url, query);

      await  axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

            const wellStructuredData = [];

            if (!query.league) {
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
            }

            resolve({
              msg: "Matches found",
              status: 1,
              matches: query.league ? data?.response : wellStructuredData,
            });
          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg:error, status: 0 });
      }
    });
  }


   readstandings(query) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(query);

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://v3.football.api-sports.io/standings?${params}`;

        console.log(url, query);

       await axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);

              reject({ msg: data.errors, status: 0 });

              return;
            }




            resolve({
              msg: "standings found",
              status: 1,
              standings: data?.response[0]?.league?.standings[0] ,
            });
          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg: error, status: 0 });
      }
    });
  }


    ParticularMatchread(query) {
      
    return new Promise(async (resolve, reject) => {
      try {
        console.log(query);

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://v3.football.api-sports.io/fixtures?${params}`;
        console.log(url, query);

     await   axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

      

            resolve({
              msg: "Matches found",
              status: 1,
              matches:  data?.response[0],
            });
          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg:error, status: 0 });
      }
    });
  }

      TeamH2Hread(query) {
      
    return new Promise(async (resolve, reject) => {
      try {
        console.log(query);

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://v3.football.api-sports.io/fixtures?${params}`;
        console.log(url, query);

     await   axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

      

            resolve({
              msg: "Matches found",
              status: 1,
              h2h:  data?.response,
            });
          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg:error, status: 0 });
      }
    });
  }




    newsread(query) {
      
    return new Promise(async (resolve, reject) => {
      try {
       

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/news?${params}`;
        console.log(url, query);

    await    axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

      

            resolve({
              msg: "Matches found",
              status: 1,
              news:  data?.response,
            });
          })
          .catch((error) => {
            console.error("API call failed:", error);
            reject({ msg:error, status: 0 });
          });
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg: error, status: 0 });
      }
    });
  }


playerDetailsread(query) {
      
    return new Promise(async (resolve, reject) => {
      try {

        console.log(query);

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://v3.football.api-sports.io/players?${params}`;

        console.log(url, query);

      await  axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

      

            resolve({
              msg: "Matches found",
              status: 1,
              player:data?.response[0],
            });

          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg: error, status: 0 });
      }
    });
  }



    PerticulerTeamMatchesRead(query) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(query);

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://v3.football.api-sports.io/fixtures?${params}`;

        console.log(url, query);

     await   axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

        
            resolve({
              msg: "Matches found",
              status: 1,
              matches: data?.response ,
            });
          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg:error, status: 0 });
      }
    });
  }


  TeamPlayerStatsread(query) {
      
    return new Promise(async (resolve, reject) => {
      try {

        console.log(query);

        const params =
          Object.keys(query)?.length != 0 &&
          new URLSearchParams(query).toString();

        const url = `https://v3.football.api-sports.io/players?${params}`;

        console.log(url, query);

     await   axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

      

            resolve({
              msg: "data found",
              status: 1,
              player:data?.response,
            });

          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg: error, status: 0 });
      }
    });
  }


 


    Leaguesread(query) {
      
    return new Promise(async (resolve, reject) => {
      try {
const params=Object.keys(query)?.length!=0&& new URLSearchParams(query).toString()

        const url = `https://v3.football.api-sports.io/leagues?${params}`;   

     await   axios
          .get(url, {
            headers: {
              "x-apisports-key": process.env.FOOTBALL_API_KEY,
            },
          })
          .then((success) => {
            const data = success.data;

            if (data.errors && Object.keys(data.errors).length > 0) {
              console.error("API errors:", data.errors);
              reject({ msg: data.errors, status: 0 });
              return;
            }

      

            resolve({
              msg: "leagues found",
              status: 1,
              leagues:data?.response,
            });

          })
          .catch((error) => {
  const message =
    error?.response?.data?.message || error?.message || "Unknown error";
  console.error("API call failed:", message);
  reject(message); // return only message
});
      } catch (error) {
        console.error("Internal error:", error);
        reject({ msg: error, status: 0 });
      }
    });
  }



}

module.exports = MatchesController;
