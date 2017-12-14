export const CHANGE_VIDEO = 'CHANGE_VIDEO';
export const CHANGE_BROADCAST_MESSAGE = 'CHANGE_BROADCAST_MESSAGE';
export const SELECT_FEATURED_PRODUCT = 'SELECT_FEATURED_PRODUCT';

export const changeVideo = video => ({
  type: CHANGE_VIDEO,
  video,
});

export const changeBroadcastMessage = broadcastMessage => ({
  type: CHANGE_BROADCAST_MESSAGE,
  broadcastMessage,
});

export const selectFeaturedProduct = product => ({
  type: SELECT_FEATURED_PRODUCT,
  product,
});
