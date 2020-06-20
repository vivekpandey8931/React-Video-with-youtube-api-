import axios from "axios";

const KEY = 'AIzaSyB54y1DJQzdeA2wkXlZsErwEKIKjRCYQcw';

// Axios instance, accessing the YouTube API
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
