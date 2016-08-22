var AppActions = require('../actions/AppActions');

module.exports = {
  addNote: function(note) {
    $.ajax({
      url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=v3t1q4vvbrcF5LmOJ13j19qpmhYHeDSW',
      data: JSON.stringify(note),
      type: 'POST',
      contentType: 'application/json'
    });
  },

  getNotes: function() {
    $.ajax({
      url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=v3t1q4vvbrcF5LmOJ13j19qpmhYHeDSW',
      dataType: 'json',
      success: function(data) {
        AppActions.receiveNotes(data);
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  },
}
