const config = require('../../../config.js');
const axios = require('axios');

const YOUTUBE_API_KEY = config.YOUTUBE_API_KEY;

const getYoutubeChannelId = (username, cb) => {
  let youtubeId = '';
  axios.get(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&forUsername=${username}&key=${YOUTUBE_API_KEY}`)
    .then((res) => {
      const snippet = res.data.items[0].snippet;
      const details = res.data.items[0].contentDetails;
      youtubeId = res.data.items[0].id;
      cb(youtubeId, snippet, details);
    })
    .catch((err) => {
      console.error(err);
    });
};

const callback = (id, snippet, details) => {
  console.log(id);
  console.log(snippet);
  console.log(details);
  return id;
};

// getYoutubeChannelId('Chillhopdotcom', callback);
module.exports = getYoutubeChannelId;
