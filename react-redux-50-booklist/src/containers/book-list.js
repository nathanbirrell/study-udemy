import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
};

function mapStateToProps(state) {
  // anything returned here is returned as props in the container (BookList)
  return {
    books: state.books
  };
}

// anything returned will become props on BookList container
function mapDispatchToProps(dispatch) {
  // when selectBook is called, pass result to reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container (it needs to know )
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
