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

  async getChannelVideos(channelId) {
    const channelVideos = await this.#getChannelVideosRes(channelId);
    const videoIds = channelVideos
      .map((item) => item.contentDetails.videoId)
      .join(',');

    const channelVideoRes = await this.apiClient.statistics({
      params: {
        part: 'statistics',
        id: videoIds,
      },
    });
    const channelVideoItems = channelVideoRes.data.items;

    const channelVideoMap = new Map(
      channelVideoItems.map((item) => [item.id, item.statistics])
    );

    return channelVideos.map((item) => ({
      ...item,
      id: item.contentDetails.videoId,
      statistics: channelVideoMap.get(item.contentDetails.videoId) ?? {
        viewCount: '0',
        favoriteCount: '0',
        commentCount: '0',
      },
    }));
  }

  async #getChannelVideosRes(channelId) {
    const playlistId = await this.apiClient
      .channel({
        params: { part: 'contentDetails', id: channelId },
      })
      .then((res) => res.data.items[0].contentDetails.relatedPlaylists.uploads);

    return this.apiClient
      .playlist({
        params: { part: 'snippet,contentDetails', playlistId, maxResults: 25 },
      })
      .then((res) => res.data.items);
  }

  async #searchByKeyword(keyword) {
    // 1. get Video id
    const searchItems = await this.#getSearchRes(keyword);
    const videoIds = searchItems.map((item) => item.id).join(',');

    // 2. get statistics Data
    const statsRes = await this.apiClient.statistics({
      params: {
        part: 'statistics',
        id: videoIds,
      },
    });
    const statsItems = statsRes.data.items;

    // 3. Link id with data
    const statsMap = new Map(
      statsItems.map((item) => [item.id, item.statistics])
    );

    return searchItems.map((item) => ({
      ...item,
      statistics: statsMap.get(item.id),
    }));
  }

  async #getSearchRes(keyword) {
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
      .then((items) =>
        items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
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
