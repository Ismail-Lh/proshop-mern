import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { Footer, Header } from '@components';
import { ProductScreen } from '@screens';

const ProductPage = () => {
  const { query } = useRouter();
  const productId = query.id;
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <ProductScreen productId={productId} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
