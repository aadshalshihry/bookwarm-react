import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import AddBookCtA from '../ctas/AddBookCtA';
import ShowBookCtA from '../ctas/ShowBookCtA';
import {fetchBooks} from '../../actions/book';
import { allBooksSelector } from '../../reducers/books';

class DashboardPage extends Component {

  componentDidMount = () => this.onInit(this.props);

  onInit = (props) => props.fetchBooks();

  render() {
    const {isConfirmed, books, history} = this.props;
    return (<div>
      {!isConfirmed && <ConfirmEmailMessage/>}

      {
        books.length === 0
          ? <AddBookCtA/>
          : <ShowBookCtA books={books} history={history}/>
      }
    </div>);
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  }
}

export default connect(mapStateToProps, {fetchBooks})(DashboardPage);
