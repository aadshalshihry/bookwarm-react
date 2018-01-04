import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import ShowBookCard from '../ctas/ShowBookCard';
import {allBooksSelector} from '../../reducers/books';
import { removeBook } from '../../actions/book';


require('../Style.css');

class DeleteConformation extends React.Component {
  state = {
    book: {},
    index: -1
  }
  
  componentWillMount() {
    const loc = this.props.location.search.split("=");
    const id = loc[1];
    let index;
    for(let i = 0; i < this.props.books.length; i+=1){
      if(this.props.books[i]._id === id){
        index = i;
        break
      }
    }
    const book = this.props.books[index];
    if (!book)
      this.props.history.push('/dashboard')
    else
      this.setState({
        book,
        index
      })
  }

  yesHandler = () => {
    const { index } = this.state;
    this.props.removeBook(this.props.books[index]);
    this.props.history.push('/dashboard')
  }

  noHandler = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    const {book} = this.state;
    return (
      <div>
        <h1>DeleteConformation</h1>
        <div id="BookCard">
          <ShowBookCard  history={this.props.history} book={book} />
        </div>
        <div id="confCard">
          <h2>Are you sure you want to remove this book?</h2>
          <Button basic color='red' onClick={this.yesHandler}>Yes</Button>
          <Button basic color='green' onClick={this.noHandler}>No</Button>
        </div>
      </div>
    )
  }
}


DeleteConformation.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    books: allBooksSelector(state)
  }
}

export default connect(mapStateToProps, { removeBook })(DeleteConformation);
