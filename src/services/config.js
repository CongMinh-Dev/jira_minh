import axios from "axios";

export const http = axios.create({
  baseURL: "https://jiranew.cybersoft.edu.vn/api/",
  headers: {
    tolenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjciLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsImlhdCI6MTc1ODEyOTU4NCwiZXhwIjoxNzU4NTYxNTg0fQ.-U4gFwz1HM8yWlR_6oz8xwUdOgSkNq3ZbCHgxTP2lUE",
  },
  timeout: 30000,
});
