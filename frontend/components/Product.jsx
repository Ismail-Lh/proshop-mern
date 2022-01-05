import { Card } from 'react-bootstrap';
import { Rating, NextLink } from '@components';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <NextLink route={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </NextLink>

      <Card.Body>
        <NextLink route={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </NextLink>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
