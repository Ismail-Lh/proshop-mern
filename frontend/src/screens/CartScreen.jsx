import { useEffect } from 'react';
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  const qty = searchParams.get('qty');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  return <div>Cart Screen</div>;
};

export default CartScreen;
