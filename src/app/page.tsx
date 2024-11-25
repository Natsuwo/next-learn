import Link from "next/link";
import x from "@/styles/app.module.css";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">
            <span className={x["red"]}>Facebook</span>
          </Link>
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
