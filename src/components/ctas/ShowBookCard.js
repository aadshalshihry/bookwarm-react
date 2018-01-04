import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Image, Card} from 'semantic-ui-react'
import BookBtnHandler from './BookBtnHandler';
import {makeBookFinish} from '../../actions/book';

import './Card.css'

class ShowBookCard extends Component {

  state = {
    book: this.props.book,
    loading: false,
    finish: false
  }

  onFinishHandler = () => {
    this.setState({loading: true});
    this.props.makeBookFinish(this.state.book).then(res => {
      this.setState({book: res});
    })

    this.setState({loading: false});
  }

  render() {
    const {book} = this.state;

    return (<Card>
      {book.hasFinished && <i id="finishedCard" className="fa fa-check-circle" aria-hidden="true" />}

      <Card.Content >
        <Image floated='right' size='tiny' src={book.cover}/>
        <Card.Header>
          {book.title}
        </Card.Header>
        <Card.Meta>
          By - {book.authors}
          <br/> {book.pages}
          page(s)
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group
          <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <BookBtnHandler onFinishHandler={this.onFinishHandler} finish book={book}/>
          <BookBtnHandler history={this.props.history} finish={false} book={book}/>
        </div>
      </Card.Content>
    </Card>)
  }
}

ShowBookCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  book: PropTypes.shape({title: PropTypes.string.isRequired}).isRequired,
  makeBookFinish: PropTypes.func.isRequired,
}

export default connect(null, {makeBookFinish})(ShowBookCard);
