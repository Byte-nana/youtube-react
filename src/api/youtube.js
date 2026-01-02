export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#getMostPopular();
  }

  async getChannelInfo(channelId) {
    return this.apiClient
      .channel({
        params: {
          part: 'snippet,contentDetails,statistics',
          id: channelId,
        },
      })
      .then((res) => res.data.items[0]);
  }
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 25,
          regionCode: 'GB',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #getMostPopular() {
    return this.apiClient
      .popular({
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          maxResults: 25,
          regionCode: 'GB',
        },
      })
      .then((res) => res.data.items);
  }
}
