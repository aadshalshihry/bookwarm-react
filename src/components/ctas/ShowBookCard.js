import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card, Button } from 'semantic-ui-react'



const ShowBookCard = ({ book, onFinish, onDelete, loading }) => (
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
        <Button basic color='green' onClick={onFinish} loading={loading}>Finish</Button>
        <Button basic color='red' onClick={onDelete} loading={loading}>Remove</Button>
      </div>
    </Card.Content>
  </Card>
);




ShowBookCard.propTypes = {
  book: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
  onFinish: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default ShowBookCard;