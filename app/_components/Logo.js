import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
function Logo() {
  const logoTitle = process.env.logoTitle;

  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        quality={100}
        height={80}
        width="auto"
        alt="Logo"
        blur="true"
      />
      <span className="text-xl font-semibold text-primary-800">
        {logoTitle ? logoTitle : "wild oasis"}
      </span>

    </Link>
  );
}

export default Logo;
