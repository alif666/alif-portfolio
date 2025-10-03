import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-accent-600 text-xl ">
      <ul className="flex gap-16  items-center">
        <li>
          <Link
            href="/cabins"
            className=" hover:text-primary-700 transition-colors"
          >
            Solutions
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-primary-50 transition-colors"
          >
            Products
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Experience
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
