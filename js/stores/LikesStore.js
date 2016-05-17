import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import LikesConstants from '../constants/LikesConstants';

var likes = 0;
var CHANGE_EVENT = 'change';

var LikesStore = assign({}, EventEmitter.prototype, {
  getLikes: function() {
    return {'likes': likes};
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case LikesConstants.LIKE:
    likes += 1;
    LikesStore.emitChange();
    break;
  }
});

module.exports = LikesStore
