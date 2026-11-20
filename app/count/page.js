import Counter from '../components/Counter';

export default function CountPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Counters</h1>
      <Counter step={1} color="steelblue" />
      <Counter step={2} color="seagreen" />
    </main>
  );
}