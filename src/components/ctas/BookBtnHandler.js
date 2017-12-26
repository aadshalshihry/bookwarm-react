import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { removeBook } from '../../actions/book';

class BookBtnHandler extends Component {
  state = {
    data: {
      book: this.props.book
    },
    onFinishLoading: false,
    onRemoveLoading: false,
  };

  onFinishHandler = (e) => {
    console.log("OnFinishHandler");
  }

  onRemoveHandler = (e) => {
    this.setState({ onRemoveLoading: true });
    this.props.removeBook(this.props.book)
    this.setState({ onRemoveLoading: false });
  }

  render() {
    const { onFinishLoading, onRemoveLoading } = this.state;
    const { finish, remove } = this.props;
    if (finish) {
      return (
        <Button basic color='green' onClick={this.onFinishHandler} loading={onFinishLoading}>Finish</Button>
      );
    } else {
      return (
        <Button basic color='red' onClick={this.onRemoveHandler} loading={onRemoveLoading}>Remove</Button>
      );
    }

  }
}

BookBtnHandler.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  finish: PropTypes.bool,
  remove: PropTypes.bool,
  removeBook: PropTypes.func.isRequired
}



export default connect(null, { removeBook })(BookBtnHandler);