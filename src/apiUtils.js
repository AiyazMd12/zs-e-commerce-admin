import axios from "axios";
import { Base64 } from "js-base64";
import Cookies from "js-cookie";
const crypto = require("crypto");

export default endpoint = axios.create({
    baseURL: "https://zs-e-commerce-backend.onrender.com/",
    withCredentials: true,
  });
