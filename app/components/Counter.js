'use client';
import { useState } from 'react';

export default function Counter({ step, color }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prev => (prev + step > 10 ? 0 : prev + step)); // reset when it exceeds 10
  }

  return (
    <div style={{ margin: '1rem 0' }}>
      <p>Count: {count}</p>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: 6 }}
      >
        +{step}
      </button>
    </div>
  );
}