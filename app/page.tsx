import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-16">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Eric Shively
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <br></br>
            Try
            <span className="font-semibold">
              {" "}
              <Link href="starterpax.com"> Starter Pax </Link>
            </span>
            for hobby recommendations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Software Engineer in the Bay Area. <br /> Love skateboarding,
            snowboarding, dirtbiking, coding, and econ.
          </p>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt="Eric Shively"
            height={176}
            width={176}
            src="/avatar.jpg"
            sizes="30vw"
            priority
            className="rounded-full filter"
          />
        </div>
      </div>
    </div>
  );
}
