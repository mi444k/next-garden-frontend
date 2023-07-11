import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return <footer className="container">Footer</footer>;
};

export default Footer;
