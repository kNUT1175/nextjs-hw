import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>NextJS Homework</h1>
      <ul>
        <li><Link href="/count">Count</Link></li>
        <li><Link href="/githublink">GitHub Link</Link></li>
        <li><Link href="/store">Store</Link></li>
      </ul>
      <p>
        Source code:{" "}
        <a href="https://github.com/kNUT1175/nextjs-hw">github.com/kNUT1175/nextjs-hw</a>
      </p>
    </main>
  );
}
