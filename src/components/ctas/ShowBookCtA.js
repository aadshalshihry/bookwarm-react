import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';
import ShowBookCard from './ShowBookCard';

class ShowBookCtA extends Component {

  state = {
    books: this.props.books,
    loading: false
  }

  render() {
    const {books} = this.state;
    return (<Card.Group>
      {
        books.map((val) =>
          <ShowBookCard book={val} key={val._id} history={this.props.history} />
        )
      }
    </Card.Group>);
  }
}

ShowBookCtA.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({title: PropTypes.string.isRequired}).isRequired
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export default ShowBookCtA;
