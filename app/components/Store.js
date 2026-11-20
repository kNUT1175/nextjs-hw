'use client';
import { useState, useEffect } from 'react';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []); // empty array = run once on mount

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr><th>Title</th><th>Image</th><th>Price</th></tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td><img src={p.image} alt={p.title} width={60} /></td>
              <td>${p.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}