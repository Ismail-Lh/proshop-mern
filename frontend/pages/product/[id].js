import { Container } from 'react-bootstrap';
import { Footer, Header } from '@components';
import { ProductScreen } from '@screens';

const ProductPage = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <ProductScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
