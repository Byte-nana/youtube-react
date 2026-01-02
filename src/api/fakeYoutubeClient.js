import axios from 'axios';

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }

  async popular() {
    return axios.get('/videos/popular.json');
  }

  async channel() {
    return axios.get('/videos/channel.json');
  }

  async playlist() {
    return axios.get('/videos/playlist.json');
  }

  async statistics() {
    return axios.get('/videos/statistics.json');
  }
}
