import axios from "axios";

const host = "http://localhost:8000";

const arrayQuestions = [
  // ------------- list Title -------------

  { optionsUrl: "listTitle", nameQuestion: "fetchListTitleApi", method: "get" },
  {
    optionsUrl: "listTitle",
    nameQuestion: "createItemListTitleApi",
    method: "post",
  },
  {
    optionsUrl: "listTitle",
    nameQuestion: "toggleItemListTitleApi",
    method: "put",
  },
  {
    optionsUrl: "listTitle",
    nameQuestion: "deleteItemListTitleApi",
    method: "delete",
  },
  // ------------- list Task -------------
  { optionsUrl: "listTask", nameQuestion: "fetchListTaskApi", method: "get" },
  {
    optionsUrl: "listTask",
    nameQuestion: "createItemListTaskApi",
    method: "post",
  },
  {
    optionsUrl: "listTask",
    nameQuestion: "toggleItemListTaskApi",
    method: "put",
  },
  {
    optionsUrl: "listTask",
    nameQuestion: "deleteItemListTaskApi",
    method: "delete",
  },
];

class FetchApi {
  static async buildRequest(method, options, data) {
    const res = await axios({
      method,
      url: `${host}/${options}`,
      data,
    });
    return res.data;
  }
}

arrayQuestions.forEach((question) => {
  const { nameQuestion, optionsUrl, method } = question;
  FetchApi[nameQuestion] = (data) => {
    if (data) {
      return FetchApi.buildRequest(method, optionsUrl, data);
    }
    return FetchApi.buildRequest(method, optionsUrl);
  };
});

export default FetchApi;
