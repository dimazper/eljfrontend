import axios from "axios";

export default axios.create({
  baseURL: "http://34.230.74.44:8000/",
  headers: {
    'authorization': 'Token 5f1c57dbbe2dbaabe6f8ada1c7f3c0e6dd2e2a35',
    "Content-type": "application/json"
  }
});