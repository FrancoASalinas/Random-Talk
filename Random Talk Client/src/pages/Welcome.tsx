import Buttons from "../components/Buttons";
import Features from "../components/Features";
import Title from "../components/Title";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { ButtonRefs } from "../components/Buttons";
import { useEffect, useRef } from "react";
import scrollToElement from "../lib/scrollToElement";

function Welcome() {
  const buttonsRef = useRef<ButtonRefs>(null);
  const signUpRef = useRef<HTMLFormElement>(null);
  const signInRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    buttonsRef?.current?.primaryButtonRef.current?.addEventListener(
      "click",
      () => scrollToElement(signUpRef)
    );

    buttonsRef?.current?.secondaryButtonRef.current?.addEventListener(
      "click",
      () => scrollToElement(signInRef)
    );

    return () => {
      window.removeEventListener("click", () => scrollToElement(signUpRef));
      window.removeEventListener("click", () => scrollToElement(signUpRef));
    };
  }, []);

  return (
    <>
      <main className='flex w-12 mx-auto flex-col items-center justify-around min-h-screen font-text'>
        <Title />
        <Buttons ref={buttonsRef} />
        <Features />
      </main>
      <section className='w-12 min-h-screen mx-auto mt-6 text-gray-100 flex items-center flex-col gap-5 justify-around my-6'>
        <SignUp ref={signUpRef} />
        <Divisor />
        <SignIn ref={signInRef} />
      </section>
    </>
  );
}

function Divisor() {
  return (
    <div className='w-full h-[1px] border-t border-grape-200 relative'>
      <span className='absolute mx-auto block top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 text-4 text-grape-200 left-1/2 bg-grape-600'>
        Or
      </span>
    </div>
  );
}

export default Welcome;
