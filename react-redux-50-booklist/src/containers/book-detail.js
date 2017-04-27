import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Click a book mf</div>;
    }

    return (
      <div>
        <h3>Details for: </h3>
        <p>Title: {this.props.book.title}</p>
        <p>Author: {this.props.book.author}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}
 export default connect(mapStateToProps)(BookDetail);
