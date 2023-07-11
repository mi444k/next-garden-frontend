'use client';
import { useSearchParams } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products catalog',
};

interface filtersType {
  [key: string]: string;
}

export default function ProductsPage() {
  const filters: filtersType = {};
  for (const [key, value] of useSearchParams().entries()) {
    filters[key] = value;
  }

  return (
    <>
      <h1>Hello Products page</h1>
      <ul>
        {Object.entries(filters)?.map((item) => (
          <li key={item[0]}>
            {item[0]}: {item[1]}
          </li>
        ))}
      </ul>
    </>
  );
}
