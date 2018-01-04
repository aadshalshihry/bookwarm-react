import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'

class BookBtnHandler extends Component {
  state = {
    book: this.props.book,
    onFinishLoading: false,
    onRemoveLoading: false,
  };

  onRemoveHandler = (id) => {
    this.props.history.push(`/books/delete/?id=${id}`);
  }

  render() {
    const { onFinishLoading } = this.state;
    const { finish } = this.props;
    const { book } = this.props;
    if (finish) {
      return (
        <Button basic color='green'
          onClick={this.props.onFinishHandler} 
          loading={onFinishLoading}>Finish</Button>
      );
    }
      return (
        <Button basic color='red'
          onClick={() => this.onRemoveHandler(book._id)}>
        Remove</Button>
      );
  }
}


BookBtnHandler.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  onFinishHandler: PropTypes.func,
  finish: PropTypes.bool.isRequired,
}



export default BookBtnHandler;
