import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Link href={href}>
      <button>{children}</button>
    </Link>
  );
}
