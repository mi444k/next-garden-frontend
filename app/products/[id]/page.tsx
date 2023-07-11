type Props = {
  params: {
    id: string;
  };
};

export default function Product({ params: { id } }: Props) {
  return (
    <>
      <h1>Single product page with ID: {id}</h1>
    </>
  );
}
