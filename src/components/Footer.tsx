import Image from "next/image";
import Link from "next/link";

const infoArray = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Press",
    href: "/press",
  },
];

const contactArray = [
  {
    title: "Videos",
    href: "/videos",
  },
  {
    title: "Gaming",
    href: "/gaming",
  },
  {
    title: "Travel",
    href: "/travel",
  },
  {
    title: "Music",
    href: "/music",
  },
  {
    title: "Sports",
    href: "/sports",
  },
];

const Information = ({ contact }: { contact?: boolean }) => {
  return (
    <div className="flex flex-col text-gray-300">
      {contact
        ? contactArray.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group"
            >
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))
        : infoArray.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group"
            >
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          About us{" "}
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Link href={"/"}>
          <Image
            src="/assets/movie_logo.png"
            alt="Logo"
            width={600}
            height={100}
            priority={true}
            className="cursor-pointer w-50 h-auto"
          />
        </Link>
        <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
          This movie discovery site helps users quickly find movies, explore details, and browse curated categories using real-time data from the TMDB API. It’s designed to feel fast, intuitive, and modern while demonstrating my ability to build clean, scalable front-end applications.

Tech Stack

The project is built with Next.js using the App Router for server-side rendering, routing, and optimized performance. TypeScript is used throughout to ensure type safety and maintainability, especially when working with third-party APIs. Movie data is fetched directly from TMDB, powering dynamic pages, search, and category views. For the UI, I used shadcn/ui and Tailwind CSS to create reusable, accessible components with a consistent and responsive design.

What I Built

Key features include a dynamic browsing experience, instant search, category-based routing, and clean UI components. The app uses React Server Components and structured data fetching patterns to keep the experience lightweight and efficient. Overall, this project highlights my ability to build production-ready front-end systems—combining modern frameworks, strong API integration, and thoughtful UX to deliver a polished user experience.
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Information
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information />
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Category
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information contact={true} />
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Connect with Us
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <div className="text-gray-300 text-sm flex flex-col gap-2">
          <p>
            Phone: <span className="text-white font-medium">214 970 0622</span>
          </p>
          <p>
            Email:{" "}
            <span className="text-white font-medium">
              uzomaworks123@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;