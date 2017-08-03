import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book frim the list to get started.</div>;
    }

    return (
      <div className="col-sm-8">
        <h3>Details for :</h3>
        <h4>
          <em>Title:</em> {this.props.book.title}<br/>
          <small>{this.props.book.pages} <em>pages</em></small>
        </h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
