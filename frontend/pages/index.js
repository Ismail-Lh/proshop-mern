import { Container } from 'react-bootstrap';
import { Header, Footer } from '@components';

const Home = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Hello world</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
