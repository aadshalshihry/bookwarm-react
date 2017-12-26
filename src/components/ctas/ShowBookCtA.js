import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'
import ShowBookCard from './ShowBookCard';


const ShowBookCtA = ({ books, history }) => (
  <Card.Group doubling>
      {books.map((val, index) => {
        return <ShowBookCard
          book={val}
          key={index}
       />
      })}
  </Card.Group>
);

ShowBookCtA.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ShowBookCtA;
