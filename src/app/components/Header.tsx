import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold">Aqsa Wear!</h2>
        <nav>
          <ul className="flex gap-10 underline">
            <li className="text-xl hover:font-bold transition duration-300 ease-in-out transform hover:scale-110"><Link href="/">Home</Link></li>
            <li className=" text-xl hover:font-bold transition duration-300 ease-in-out transform hover:scale-110"><Link href="/about">About</Link></li>
            <li className="text-xl hover:font-bold transition duration-300 ease-in-out transform hover:scale-110"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
