var React = require('react');
var AppActions = require('../actions/AppActions');

var NoteList = React.createClass({
  render: function(){
    return(
      <div className="column">
        <div
          onDoubleClick={this.removeNote.bind(this, this.props.note._id)}
          className="note">
            <p>{this.props.note.text}</p>
        </div>
      </div>
    );
  },

  removeNote(_id) {
    AppActions.removeNote(_id.$oid);
  }
});

module.exports = NoteList;
