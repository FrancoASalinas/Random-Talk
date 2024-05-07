import Buttons from "../components/Buttons";
import Features from "../components/Features";
import Title from "../components/Title";
import SignUp from "../components/SignUp";

function Welcome() {

  return (
    <>
      <main className='flex w-12 mx-auto flex-col items-center justify-around min-h-screen font-text'>
        <Title />
        <Buttons />
        <Features />
      </main>
      <section className='w-12 min-h-screen mx-auto mt-6 text-gray-100'>
        <SignUp />
      </section>
    </>
  );
}

export default Welcome;
