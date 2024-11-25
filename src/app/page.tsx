import Link from "next/link";


export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/">Google</Link>
        </li>
        <li>
          <Link href="/">Twitter</Link>
        </li>
      </ul>
    </div>
  );
}
