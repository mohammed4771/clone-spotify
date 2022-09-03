export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "dd108905087747aab27b8dd3fbba25d5";

const scopes = [
  "user-read-currntly-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "playlist-read-collaborative",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopne=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
