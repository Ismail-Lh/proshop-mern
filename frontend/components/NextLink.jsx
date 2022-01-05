import Link from 'next/link';

const NextLink = ({ route, children }) => {
  return (
    <Link href={route}>
      <a>{children}</a>
    </Link>
  );
};

export default NextLink;
