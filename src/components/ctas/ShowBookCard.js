import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card } from 'semantic-ui-react'
import BookBtnHandler from './BookBtnHandler';



const ShowBookCard = ({ book, history }) => (
  <Card>
    <Card.Content >
      <Image floated='right' size='tiny' src={book.cover} />
      <Card.Header>
        {book.title}
      </Card.Header>
      <Card.Meta>
        By - {book.authors} <br/> {book.pages} page(s)
      </Card.Meta>
      <Card.Description>
        Steve wants to add you to the group <strong>best friends</strong>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <BookBtnHandler finish book={book} />
        <BookBtnHandler remove book={book} />
      </div>
    </Card.Content>
  </Card>
);


ShowBookCard.propTypes = {
  book: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
}

export default ShowBookCard;