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
}
