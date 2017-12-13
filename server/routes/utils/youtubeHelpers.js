const config = require('../../../config.js')
const axios = require('axios');
const YOUTUBE_API_KEY = config.YOUTUBE_API_KEY;

const getYoutubeChannelId = (username) => {
  let youtubeId = '';
  axios.get(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${username}&key=${YOUTUBE_API_KEY}`)
    .then((res) => {
      console.log(res.data.items[0]);
      youtubeId = res.data.items[0].id;
    })
    .catch((err) => {
      console.error(err)
    });
}

//console.log(getYoutubeChannelId('Chillhopdotcom'));