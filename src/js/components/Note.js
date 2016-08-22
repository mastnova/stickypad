var React = require('react');

var NoteList = React.createClass({
  render: function(){
    return(
      <div className="column">
        <div className="note"><p>{this.props.note.text}</p></div>
      </div>
    );
  },
});

module.exports = NoteList;
