import { signIn } from "@/auth/auth";
import Image from "next/image";
const LoginPage = () => {
    return (

        <div className="grid grid-cols-1 w-10/11 place-items-center text-center">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={300}
                height={300}
            />
            <span className="text-4xl font-bold">Welcome to your favourite budgeting app.</span>
            <form
                action={async () => {
                    "use server";
                    await signIn("google");
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50vh",
                    flexDirection: "column",
                }}
            >
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#4285F4",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Login with Google
                </button>
            </form>
        </div>
    );
};

export default LoginPage;