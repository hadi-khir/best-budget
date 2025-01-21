import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto border-2 border-black">
      <div className="grid grid-cols-1 w-10/11 place-items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={300}
          height={300}
        />
        <span className="text-4xl font-bold">Welcome to your favourite budgeting app.</span>
      </div>
    </div>
  );
}
