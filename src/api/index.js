import axios from "axios";

class FetchApi {
  constructor() {
    this.url = "http://localhost:8000";
  }

  async buildRequest(method, options, data) {
    const res = await axios({
      method,
      url: `${this.url}/${options}`,
      data,
    });
    return res.data;
  }

  async fetchListTaskNames() {
    const listTaskNames = await this.buildRequest("get", "listTaskNames");
    return listTaskNames;
  }

  async fetchListsTask() {
    const listsTask = await this.buildRequest("get", "listsTask");
    return listsTask;
  }
}

export default new FetchApi();
