import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "41dc57442722476ab37e24993650077f";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

axios.defaults.baseURL = "https://api.spotify.com/v1/";

export const setClientToken = (token) => {
    axios.interceptors.request.use(function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
      });
    };
  
export default axios;  
  