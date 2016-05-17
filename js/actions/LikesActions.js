import AppDispatcher from '../dispatcher/AppDispatcher';
import LikesConstants from '../constants/LikesConstants';
var LikesActions = {
  like: function() {
    AppDispatcher.dispatch({
      actionType: LikesConstants.LIKE,
    });
  },
};

module.exports = LikesActions;
