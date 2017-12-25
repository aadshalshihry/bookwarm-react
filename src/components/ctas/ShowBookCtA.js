import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, Card, Button } from 'semantic-ui-react'
import ShowBookCard from './ShowBookCard';
import { makeBookFinish, removeBook } from '../../actions/book';


class ShowBookCtA extends Component {
  state = {
    data: {
      books: this.props.books
    },
    loading: false,
  };

  onFinish = e => {
    // this.state.book.hasFinished = !this.state.book.hasFinished;
    // this.setState({
    //   loading: true
    // })
    // this.props.makeBookFinish(this.state.book)
    //   .then(book => {
    //     this.setState({ loading: false })
    //   }).catch(err => console.log("err", err))
  }

  onDelete = () => {
    // this.setState({ loading: true });
    // this.props.removeBook(this.state.book)
    //   .then(book => {
    //     this.setState({ loading: false });
    //   })
  }

  render() {
    return (
      <Card.Group doubling>
      {this.state.books.map((val, index) => {
        return <ShowBookCard
          book={val}
          key={index}
          onFinish={this.onFinish}
          onDelete={this.onDelete}
          loading={this.state.loading}
        />
      })}
  </Card.Group>
    );
  }
}



ShowBookCtA.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  makeBookFinish: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  console.log("mapStateToProps: ", state);
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { makeBookFinish, removeBook })(ShowBookCtA);