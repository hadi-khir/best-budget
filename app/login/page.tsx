import { signIn } from "@/auth/auth";

const LoginPage = () => {
  return (
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
  );
};

export default LoginPage;