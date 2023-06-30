import axios from "axios";
import type { ResultVO } from "@/datasource/Types";
import { useStore } from "@/stores";

axios.interceptors.request.use(
  (req) => {
    const auth = sessionStorage.getItem("token");
    // 判断,用于避免header包含authorization属性但数据值为空
    if (auth && req.headers) {
      req.headers.token = auth;
    }
    return req;
  },
  (error) => {
    const store = useStore();
    store.exception = error.message;
    return Promise.reject();
  }
);
axios.interceptors.response.use(
  (resp) => {
    const data: ResultVO = resp.data;
    if (data.code != 200) {
      const store = useStore();
      store.exception = data.message ?? "";
      return Promise.reject();
    }
    return resp;
  },
  (error) => {
    const store = useStore();
    store.exception = error.message;
    return Promise.reject();
  }
);

export default axios;
