import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Mo Sofi</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
