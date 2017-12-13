const config = require('../../../config.js')
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
      console.error(err)
    });
}

const callback = (id, snippet, details) => {
  console.log(id);
  console.log(snippet);
  console.log(details);
  return id;
}

//getYoutubeChannelId('Chillhopdotcom', callback);

//RESULTS FROM THIS GET REQUEST:
// UCOxqgCwgOqC2lMqC5PYz_Dg
// { title: 'Chillhop Music',
//   description: 'Welcome to Chillhop, a breeding ground for the best and newest in Jazzy and Lofi Hip Hop. We strive to develop and renew the sound to be able keep you all entertained and chilled. :)\n\nPLAYLISTS / MORE MUSIC (SPOTIFY ETC)\n\nTo listen to Chillhop on platforms such as Spotify / Bandcamp / iTunes / Apple Music use this link:\n\nhttp://chillhop.com/listen\n\nSUBMITTING MUSIC\n\nSubmissions are temporarily closed until we set up a new system that allows us to handle the large amounts of music coming in.',
//   customUrl: 'chillhopdotcom',
//   publishedAt: '2013-01-03T20:55:21.000Z',
//   thumbnails:
//    { default: { url: 'https://yt3.ggpht.com/-e4sGOrozG9E/AAAAAAAAAAI/AAAAAAAAAAA/xUIDeGMg56Q/s88-c-k-no-mo-rj-c0xffffff/photo.jpg' },
//      medium: { url: 'https://yt3.ggpht.com/-e4sGOrozG9E/AAAAAAAAAAI/AAAAAAAAAAA/xUIDeGMg56Q/s240-c-k-no-mo-rj-c0xffffff/photo.jpg' },
//      high: { url: 'https://yt3.ggpht.com/-e4sGOrozG9E/AAAAAAAAAAI/AAAAAAAAAAA/xUIDeGMg56Q/s240-c-k-no-mo-rj-c0xffffff/photo.jpg' } },
//   localized:
//    { title: 'Chillhop Music',
//      description: 'Welcome to Chillhop, a breeding ground for the best and newest in Jazzy and Lofi Hip Hop. We strive to develop and renew the sound to be able keep you all entertained and chilled. :)\n\nPLAYLISTS / MORE MUSIC (SPOTIFY ETC)\n\nTo listen to Chillhop on platforms such as Spotify / Bandcamp / iTunes / Apple Music use this link:\n\nhttp://chillhop.com/listen\n\nSUBMITTING MUSIC\n\nSubmissions are temporarily closed until we set up a new system that allows us to handle the large amounts of music coming in.' },
//   country: 'NL' }
// { relatedPlaylists:
//    { likes: 'LLOxqgCwgOqC2lMqC5PYz_Dg',
//      uploads: 'UUOxqgCwgOqC2lMqC5PYz_Dg',
//      watchHistory: 'HL',
//      watchLater: 'WL' } }