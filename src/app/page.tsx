import { auth } from "@/app/auth";
import { Logout } from "@/components/Auth";
import { GithubSignIn as Login } from "@/components/Auth";

export default async function Home() {
  const session = await auth();
  const authButton = (session?.user) ? <Logout/> : <Login />;
  const userName = session?.user?.name;

  return (<>
    <h1>Home</h1>
    {userName && <p>Hello, {userName}</p>}
    {authButton}
    </>);
}
