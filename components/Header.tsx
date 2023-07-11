import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <header>
      <div className="container">
        <Link href="/">Main</Link>
        <Link href="/products">All products</Link>
      </div>
    </header>
  );
};

export default Header;
