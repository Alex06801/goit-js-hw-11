import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class NewApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
    this.params = {
      params: {
        key: '30732743-6603c88a50ebb6c546e4253c0',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.perPage,
      },
    };
  }
  async fetchArticles() {
    try {
      const urlAXIOS = `?page=${this.page}&q=${this.query}`;
      const { data } = await axios.get(urlAXIOS, this.params);
      this.incrementPage();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get currentPage() {
    return this.page;
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQeury) {
    this.searchQuery = newQeury;
  }
}
