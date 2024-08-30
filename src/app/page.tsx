import { auth } from "@/app/auth";
import { GithubSignIn as Login, Logout } from "@/components/Auth";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const session = await auth();

  const authed = session?.user;

  const authButton = authed ? <Logout/> : <Login/>;
  const userName = session?.user?.name;

  // Example of fetching data from the database
  let userCreatedAt = '';

  if (authed) {
    userCreatedAt = await prisma.user.findFirst({
      where: {
        id: session.user.id
      }
    }).then(user => {
      return user.createdAt.toString();
    });
  }

  return (<>
    <h1>Home</h1>
    {userName && <p>Hello, {userName}. You signed up at {userCreatedAt}</p>}
    {authButton}
  </>);
}
