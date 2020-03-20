import RSSParser from "rss-parser";
import { CORS_PROXY } from "./index"

const getRSS = (url, callback) => {
  let parser = new RSSParser();
  parser.parseURL(CORS_PROXY + url, callback)
}

export default getRSS;