var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, EventEmitter.prototype, {
  addNote: function(note) {
    _notes.push(note);
  },

  getNotes: function() {
    return _notes;
  },

  receiveNotes: function(notes) {
    _notes = notes;
  },

  removeNote: function(id) {
    _notes = _notes.filter(function(note) {
      if (note._id.$oid === id) {
        return false;
      }
      return true;
    });
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case AppConstants.SAVE_NOTE:
      AppAPI.addNote(action.note);
      break;
    case AppConstants.ADD_NOTE:
      AppStore.addNote(action.note);
      break;
    case AppConstants.RECEIVE_NOTES:
      AppStore.receiveNotes(action.notes);
      break;
    case AppConstants.REMOVE_NOTE:
      AppStore.removeNote(action.id);
      AppAPI.removeNote(action.id);
      break;
    default:
      return true;
  }
  AppStore.emitChange();
  return true;
});

module.exports = AppStore;
