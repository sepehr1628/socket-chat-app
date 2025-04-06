import Image from "next/image";
import { auth } from "../_lib/auth";

const Header: React.FC = async function () {
  const session = await auth();
  const userImage = session?.user?.image || "/user.png";

  return (
    <header className="bg-gray-700 p-4">
      <h1 className="flex items-center gap-4 text-white">
        <Image
          src={userImage}
          width="40"
          height="40"
          alt="user profile"
          className="rounded-full"
        />
        Welcome to the Socket Chat, Dear {session?.user?.name} :)
      </h1>
    </header>
  );
};
export default Header;
