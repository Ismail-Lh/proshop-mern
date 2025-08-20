import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { register } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  const navigate = useNavigate();

  const redirectTo = redirect ? redirect : '/';

  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector(state => state.userRegister);

  useEffect(() => {
    if (userInfo) navigate(redirectTo);
  }, [userInfo, navigate, redirectTo]);

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign UP</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={e => setName(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={e => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password Address</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3'>
          Sign UP
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an account?{' '}
          <Link to={redirectTo ? `/login?redirect=${redirectTo}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
