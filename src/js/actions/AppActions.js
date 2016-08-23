var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saveNote: function(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_NOTE,
      note: note
    });
  },

  addNote: function(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note: note
    });
  },

  receiveNotes: function(notes) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_NOTES,
      notes: notes
    });
  },

  removeNote: function(id) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_NOTE,
      id: id
    });
  }
}

module.exports = AppActions;
