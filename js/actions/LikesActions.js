import AppDispatcher from '../dispatcher/AppDispatcher';
import LikeConstants from '../constants/LikeConstants';
var LikesActions = {
  like: function() {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE,
    });
  },
};

module.exports = LikesActions;
