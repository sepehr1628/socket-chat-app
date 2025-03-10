import Image from "next/image";
import { signInAction } from "../_lib/actions";

const Page: React.FC = function () {
  return (
    <main className="bg-auth bg-cover bg-no-repeat h-screen flex justify-center items-center">
      <section>
        <form
          action={signInAction}
          className="flex flex-col items-center gap-8 border-2 border-white border-solid rounded-2xl p-4"
        >
          <h1 className="text-teal-500 text-center text-2xl ">Sign In Form</h1>
          <button className="flex items-center gap-4 text-white">
            <Image
              src="https://authjs.dev/img/providers/google.svg"
              width="30"
              height="30"
              alt="Google provider"
            />
            Continue with Google
          </button>
        </form>
      </section>
    </main>
  );
};

export default Page;
