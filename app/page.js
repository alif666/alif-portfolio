import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.jpg";

export default function Page() {
  const logoSubtitle = process.env.logoSubtitle;
  const logoTitle = process.env.logoTitle;
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top max-h-400"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl text-primary-800  mb-10 tracking-tight font-black">


          {logoSubtitle ? logoSubtitle : "Subtitle"}
          <span className="font-normal" >
            {" Solutions"}
          </span>
        </h1>
        <span className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
          <Link
            href="/cabins"
            className="bg-primary-50 px-8  bg-opacity-80 text-primary-800 text-lg font-semibold hover:text-primary-50 hover:bg-primary-600 transition-all"
          >
            Our Products
          </Link>
          <Link
            href="/cabins"
            className="bg-primary-50 px-8  bg-opacity-80 text-primary-800 text-lg font-semibold hover:text-primary-50 hover:bg-primary-600 transition-all"
          >
            Our Solutions
          </Link>
          <Link
            href="/cabins"
            className="bg-primary-50 px-8  bg-opacity-80 text-primary-800 text-lg font-semibold hover:text-primary-50 hover:bg-primary-600 transition-all"
          >
            Our Experiences
          </Link>

        </span>

      </div>
    </main>
  );
}
