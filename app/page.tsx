import { signOut } from "@/auth/auth";
import { auth } from "@/auth/auth";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) return notFound();
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white bg-opacity-30 shadow-md w-full p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 ml-auto">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt={`${session.user.name}'s avatar`}
              width={50}
              height={50}
              className="rounded-full border-2 border-gray-300"
            />
          )}
          <span className="text-xl font-bold">{session.user?.name}</span>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
