import { signOut } from "@/auth/auth";
import { auth } from "@/auth/auth";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) return notFound();
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg m-16 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome, {session.user?.name}!
        </h1>
        {session.user?.image && (
          <div className="flex justify-center mb-4">
            <Image
              src={session.user.image}
              alt={`${session.user.name}'s avatar`}
              width={100}
              height={100}
              className="rounded-full border-2 border-gray-300"
            />
          </div>
        )}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
          className="flex justify-center"
        >
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
}
