import Buttons from "../components/Buttons";
import Features from "../components/Features";
import Title from "../components/Title";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

function Welcome() {
  return (
    <>
      <main className='flex w-12 mx-auto flex-col items-center justify-around min-h-screen font-text'>
        <Title />
        <Buttons />
        <Features />
      </main>
      <section className='w-12 min-h-screen mx-auto mt-6 text-gray-100 flex items-center flex-col gap-5'>
        <SignUp />
        <SignIn />
      </section>
    </>
  );
}

export default Welcome;
