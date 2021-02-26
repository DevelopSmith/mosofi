import Link from "next/link";

export default function IndexPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mo Sofi</h1>
      <Link href="/about">About Mo</Link>
    </div>
  );
}
